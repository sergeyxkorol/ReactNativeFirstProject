import React, {FC, useEffect, useRef, useState} from 'react';
import {
  Keyboard,
  Pressable,
  ScrollView,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {GREY} from '../../constants';
import {
  deleteHistoryItem,
  filterSearchHistory,
  normalizeSearchHistory,
  retreiveSearchHistory,
  saveSearchHistory,
} from '../../helpers/searchHistory';
import SearchHistoryItem from '../SearchHistoryItem';
import styles from './styles';

import SearchIcon from '../../assets/icons/search.svg';

type NativeInputEvent = {
  nativeEvent: {
    text: string;
  };
};

type Props = {
  onSearch: (text: string) => void;
};

const Search: FC<Props> = ({onSearch}) => {
  const searchInput = useRef(null);
  const [searchValue, setSearchValue] = useState('');
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [filteredSearchHistory, setFilteredSearchHistory] = useState<string[]>(
    [],
  );
  const [isFocused, setIsFocused] = useState(false);

  const focusSearchInput = () => {
    searchInput.current?.focus();
    setIsFocused(true);
  };

  const blurSearchInput = () => {
    searchInput.current?.blur();
    setIsFocused(false);
  };

  useEffect(() => {
    async function bootstrapAsync() {
      const initialSearchHistory = await retreiveSearchHistory();

      setSearchHistory(initialSearchHistory);
      setFilteredSearchHistory(initialSearchHistory);
    }

    bootstrapAsync();
  }, []);

  useEffect(() => {
    const hideSubscription = Keyboard.addListener(
      'keyboardDidHide',
      blurSearchInput,
    );

    return () => {
      hideSubscription.remove();
    };
  }, []);

  const onFocus = () => {
    setFilteredSearchHistory(filterSearchHistory(searchHistory, searchValue));
    setIsFocused(true);
  };

  const onChange = (text: string) => {
    const searchHistoryList = filterSearchHistory(searchHistory, text);

    setFilteredSearchHistory(searchHistoryList);
    setSearchValue(text);
  };

  const search = async (text: string) => {
    if (text.length) {
      try {
        blurSearchInput();
        setSearchValue(text);

        const updatedSearchHistory = await normalizeSearchHistory(text);
        await saveSearchHistory(updatedSearchHistory);
        await onSearch(text);

        setSearchHistory(updatedSearchHistory);
        setFilteredSearchHistory(updatedSearchHistory);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const onSubmit = async ({nativeEvent}: NativeInputEvent) => {
    try {
      const {text} = nativeEvent;

      await search(text);
    } catch (error) {
      console.error(error);
    } finally {
      setIsFocused(false);
    }
  };

  const deleteItem = async (text: string) => {
    const updatedSearchHistory = await deleteHistoryItem(text);

    setSearchHistory(updatedSearchHistory);
    setFilteredSearchHistory(updatedSearchHistory);
  };

  const isVisibleSearchHistory = isFocused && searchHistory.length > 0;

  return (
    <TouchableWithoutFeedback onPress={blurSearchInput}>
      <View style={styles.container}>
        <View>
          <Pressable onPress={focusSearchInput} style={styles.searchWrapper}>
            <SearchIcon fill={GREY} />
            <TextInput
              ref={searchInput}
              style={styles.searchInput}
              value={searchValue}
              autoFocus={true}
              onChangeText={onChange}
              onFocus={onFocus}
              onSubmitEditing={onSubmit}
            />
          </Pressable>
          {isVisibleSearchHistory && (
            <View style={styles.historyContainer}>
              <ScrollView
                keyboardShouldPersistTaps="handled"
                style={styles.historyList}>
                {filteredSearchHistory.map(item => (
                  <SearchHistoryItem
                    key={item}
                    title={item}
                    onPress={search}
                    onPressDelete={deleteItem}
                  />
                ))}
              </ScrollView>
            </View>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Search;
