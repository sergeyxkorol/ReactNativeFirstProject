import React, {FC, useEffect, useRef, useState} from 'react';
import {
  Pressable,
  ScrollView,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import commonStyles from '../../commonStyles';
import {API_URL, GREY} from '../../constants';
import {loadData} from '../../helpers/loadData';
import ProductItem from '../../components/ProductItem';
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

  const focusSearchInput = () => {
    searchInput.current?.focus();
  };

  useEffect(() => {
    focusSearchInput();
  }, []);

  const onSubmit = async ({nativeEvent}: submitInputEvent) => {
    try {
      const {text} = nativeEvent;
      const parsedResponse = await loadData(
        `${API_URL}/products?filter[name]=${text}`,
      );

      setProductsList(parsedResponse.data);
    } catch (error) {
      console.error(error);
    }
  };

  const {height} = useWindowDimensions();

  return (
    <View>
      <View style={styles.search}>
        <Pressable
          style={styles.searchWrapper}
          onPress={focusSearchInput}
          onSubmitEditing={onSubmit}>
          <SearchIcon fill={GREY} />
          <TextInput ref={searchInput} style={styles.searchInput} />
        </Pressable>
      </View>

      <View style={{...commonStyles.safeArea, height}}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={[commonStyles.generalWrapper, styles.wrapper]}>
          <View>
            {productsList.map(product => (
              <ProductItem key={product.id} data={product} />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default SearchResult;
