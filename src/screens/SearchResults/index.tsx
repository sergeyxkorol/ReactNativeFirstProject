import React, {FC, useState} from 'react';
import {ScrollView, View} from 'react-native';
import commonStyles from '../../commonStyles';
import ProductItem from '../../components/ProductItem';
import ScreenWithKeyboard from '../../components/ScreenWithKeyboard';
import Search from '../../components/Search';
import Loader from '../../components/Loader';
import {loadData} from '../../helpers/loadData';
import {API_URL} from '../../constants';
import styles from './styles';

const SearchResult: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [productsList, setProductsList] = useState([]);

  const onSearch = async (text: string) => {
    try {
      setIsLoading(true);

      const parsedResponse = await loadData(
        `${API_URL}/products?filter[name]=${text}`,
      );

      setProductsList(parsedResponse.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderResult = () =>
    isLoading ? (
      <Loader />
    ) : (
      <ScreenWithKeyboard>
        <ScrollView>
          <View style={[commonStyles.generalWrapper, styles.productWrapper]}>
            {productsList.map(product => (
              <ProductItem key={product.id} data={product} />
            ))}
          </View>
        </ScrollView>
      </ScreenWithKeyboard>
    );

  return (
    <>
      <View style={styles.searchWrapper}>
        <Search onSearch={onSearch} />
      </View>
      {renderResult()}
    </>
  );
};

export default SearchResult;
