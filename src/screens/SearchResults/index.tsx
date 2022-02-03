import React, {FC, useEffect, useRef, useState} from 'react';
import {Pressable, TextInput, View} from 'react-native';
import commonStyles from '../../commonStyles';
import {API_URL, GREY} from '../../constants';
import {loadData} from '../../helpers/loadData';
import {
  normalizeSearchHistory,
  retreiveSearchHistory,
  saveSearchHistory,
} from '../../helpers/searchHistory';
import ProductItem from '../../components/ProductItem';
import ScreenWithKeyboard from '../../components/ScreenWithKeyboard';
import styles from './styles';

import SearchIcon from '../../assets/icons/search.svg';

type submitInputEvent = {
  nativeEvent: {
    text: string;
  };
};

const SearchResult: FC = () => {
  const searchInput = useRef(null);
  const [productsList, setProductsList] = useState([]);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  const focusSearchInput = () => {
    searchInput.current?.focus();
  };

  useEffect(() => {
    focusSearchInput();

    async function bootstrapAsync() {
      const initialSearchHistory = await retreiveSearchHistory();

      setSearchHistory(initialSearchHistory);
    }

    bootstrapAsync();
  }, []);

  const onSubmit = async ({nativeEvent}: submitInputEvent) => {
    try {
      const {text} = nativeEvent;

      const updatedSearchHistory = normalizeSearchHistory(text, searchHistory);
      await saveSearchHistory(updatedSearchHistory);
      setSearchHistory(updatedSearchHistory);

      const parsedResponse = await loadData(
        `${API_URL}/products?filter[name]=${text}`,
      );

      setProductsList(parsedResponse.data);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(59, searchHistory);

  return (
    <>
      <View style={styles.search}>
        <Pressable
          style={styles.searchWrapper}
          onPress={focusSearchInput}
          onSubmitEditing={onSubmit}>
          <SearchIcon fill={GREY} />
          <TextInput ref={searchInput} style={styles.searchInput} />
        </Pressable>
      </View>
      <ScreenWithKeyboard>
        <View style={[commonStyles.generalWrapper, styles.wrapper]}>
          {productsList.map(product => (
            <ProductItem key={product.id} data={product} />
          ))}
        </View>
      </ScreenWithKeyboard>
    </>
  );
};

export default SearchResult;
