import React, {FC, useCallback, useEffect, useState} from 'react';
import {
  ScrollView,
  Pressable,
  StyleSheet,
  RefreshControl,
  View,
  Text,
  Button,
  useWindowDimensions,
} from 'react-native';
import TopBar from '../components/TopBar';
import MainInfo from '../components/Catalog/MainInfo';
import OptionsList from '../components/OptionsList';
import {loadData} from '../helpers/loadData';
import {API_URL, GREY} from '../constants';
import commonStyles from '../commonStyles';

import ArrowIcon from '../assets/icons/arrow.svg';
import HeartEmptyIcon from '../assets/icons/heart-empty.svg';
import CartIcon from '../assets/icons/cart.svg';

const ProductDetails: FC<{productId: string}> = ({productId}) => {
  const {height} = useWindowDimensions();

  const [product, setProduct] = useState({
    attributes: {
      name: '',
      description: '',
      display_price: '',
    },
  });
  const [selectedOption, setSelectedOption] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const options = [
    {id: '01', name: 'Blue'},
    {id: '02', name: 'Green'},
  ];

  const loadDataCallback = useCallback(() => {
    if (!productId) {
      return Promise.reject('No product ID');
    }

    return loadData(`${API_URL}/products/${productId}`);
  }, [productId]);

  useEffect(() => {
    loadDataCallback().then(parsedResponse => {
      setProduct(parsedResponse.data);
    });
  }, [loadDataCallback]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);

    loadDataCallback()
      .then(parsedResponse => {
        setProduct(parsedResponse.data);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setRefreshing(false);
      });
  }, [loadDataCallback]);

  return (
    <View style={{minHeight: height}}>
      <TopBar>
        <View>
          <Pressable
            style={styles.topBarButton}
            onPress={() => console.log('Back button pressed')}>
            <ArrowIcon fill="white" />
          </Pressable>
        </View>

        <View style={styles.tobBarButtonWrapper}>
          <Pressable
            style={[styles.topBarButton, styles.tobBarButtonMargin]}
            onPress={() => console.log('Add to the Wish list button pressed')}>
            <HeartEmptyIcon stroke="white" stroke-width="1" />
          </Pressable>
          <Pressable
            style={[styles.topBarButton, styles.tobBarButtonMargin]}
            onPress={() => console.log('Cart button pressed')}>
            <CartIcon fill="white" />
          </Pressable>
        </View>
      </TopBar>

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.content}>
          <View style={[styles.section, styles.borderBottom]}>
            <MainInfo
              data={{
                name: product?.attributes?.name,
                display_price: product?.attributes?.display_price,
              }}
            />
          </View>

          <View style={[styles.section, styles.borderBottom]}>
            <View style={styles.headerWrapper}>
              <Text style={[commonStyles.text, commonStyles.textHeader]}>
                Select Color
              </Text>
              <OptionsList
                options={options}
                selectedOptionId={selectedOption}
                onPressHandler={setSelectedOption}
              />
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.headerWrapper}>
              <Text style={[commonStyles.text, commonStyles.textHeader]}>
                Description
              </Text>
            </View>

            <View>
              <Text>{product?.attributes?.description}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.cartButtonWrapper}>
        <Button title="ADD TO CART" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topBarButton: {
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tobBarButtonMargin: {
    marginLeft: 20,
  },

  tobBarButtonWrapper: {
    flexDirection: 'row',
  },

  content: {
    backgroundColor: 'white',
  },

  section: {
    paddingTop: 20,
    paddingBottom: 15,
    marginLeft: 20,
    marginRight: 20,
  },

  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: GREY,
  },

  headerWrapper: {
    marginBottom: 10,
  },

  cartButtonWrapper: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    padding: 20,
  },
});

export default ProductDetails;
