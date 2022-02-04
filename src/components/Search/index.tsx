import React, {FC, useEffect, useRef, useState} from 'react';
import {FlatList, Pressable, TextInput, View} from 'react-native';
import {GREY} from '../../constants';
import {
  deleteHistoryItem,
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

  const onFocus = () => {
    setIsFocused(true);
  };

  const onChange = ({nativeEvent}: NativeInputEvent) => {
    const {text} = nativeEvent;
    const searchHistoryList = searchHistory.filter(historyItem =>
      historyItem.includes(text),
    );

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

      search(text);
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

  const renderItem = ({item}: {item: string}) => (
    <SearchHistoryItem
      title={item}
      onPress={search}
      onPressDelete={deleteItem}
    />
  );

  return (
    <View style={styles.container}>
      <View>
        <Pressable onPress={focusSearchInput} style={styles.searchWrapper}>
          <SearchIcon fill={GREY} />
          <TextInput
            ref={searchInput}
            style={styles.searchInput}
            value={searchValue}
            autoFocus={true}
            onChange={onChange}
            onFocus={onFocus}
            onSubmitEditing={onSubmit}
          />
        </Pressable>
        {isVisibleSearchHistory && (
          <View style={styles.historyContainer}>
            <FlatList
              data={filteredSearchHistory}
              renderItem={renderItem}
              keyExtractor={item => item}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default Search;
