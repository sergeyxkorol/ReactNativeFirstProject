import React, {FC, useState} from 'react';
import {
  Keyboard,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from 'react-native';
import commonStyles from '../../commonStyles';
import ProductItem from '../../components/ProductItem';
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

  const {height} = useWindowDimensions();

  const renderResult = () =>
    isLoading ? (
      <Loader />
    ) : (
      <SafeAreaView style={{height}}>
        <ScrollView>
          <View style={[commonStyles.generalWrapper, styles.productWrapper]}>
            {productsList.map(product => (
              <ProductItem key={product.id} data={product} />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <>
        <View style={styles.searchWrapper}>
          <Search onSearch={onSearch} />
        </View>
        {renderResult()}
      </>
    </TouchableWithoutFeedback>
  );
};

export default SearchResult;
