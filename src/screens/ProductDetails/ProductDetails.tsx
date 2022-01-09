import React, {FC, useCallback, useContext, useEffect, useState} from 'react';
import {
  ScrollView,
  RefreshControl,
  View,
  Text,
  useWindowDimensions,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagesSlider from '../../components/ImagesSlider/ImagesSlider';
import MainInfo from '../../components/Catalog/MainInfo';
import OptionsList from '../../components/OptionsList/OptionsList';
import Button from '../../components/Button/Button';
import {ButtonColor} from '../../components/Button/Button.types';
import {loadData} from '../../helpers/loadData';
import {API_URL, CART_TOKEN} from '../../constants';
import commonStyles from '../../commonStyles';
import {MODAL_ROUTES} from '../../constants/routes';
import AuthContext from '../../store/AuthContext';
import styles from './ProductDetails.styles';

const ProductDetails: FC = () => {
  const {state} = useContext(AuthContext);

  const [product, setProduct] = useState({
    attributes: {
      name: '',
      description: '',
      display_price: '',
    },
  });
  const [selectedOption, setSelectedOption] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  //ToDo: change with the real images
  const imagesList = [
    {id: '01', src: require('../../assets/product.png')},
    {id: '02', src: require('../../assets/product.png')},
    {id: '03', src: require('../../assets/product.png')},
  ];

  //ToDo: change with the real options
  const options = [
    {id: '01', name: 'Blue'},
    {id: '02', name: 'Green'},
  ];

  const route = useRoute();

  useEffect(() => {
    if (route.params?.productId) {
      loadData(`${API_URL}/products/${route.params?.productId}`).then(
        parsedResponse => {
          setProduct(parsedResponse.data);
        },
      );
    }
  }, [route.params?.productId]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    let parsedResponse;

    try {
      if (route.params?.productId) {
        parsedResponse = await loadData(
          `${API_URL}/products/${route.params?.productId}`,
        );
        setProduct(parsedResponse.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setRefreshing(false);
    }
  }, [route.params?.productId]);

  const navigation = useNavigation();
  const handleAddToCart = useCallback(async () => {
    if (!state.userToken) {
      navigation.navigate(MODAL_ROUTES.LOGIN);

      return;
    }

    if (!selectedOption) {
      navigation.navigate(MODAL_ROUTES.SELECT_COLOR);

      return;
    }

    // ToDo: send request to add an item to cart
    try {
      let cartToken = await AsyncStorage.getItem(CART_TOKEN);

      if (!cartToken) {
        const response = await fetch(`${API_URL}/cart`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/vnd.api+json',
          },
          body: JSON.stringify({
            public_metadata: {
              total_weight: 3250,
            },
            private_metadata: {
              had_same_cart_items: true,
            },
          }),
        });

        const cartData = await response.json();

        console.log(114, 'cartData', cartData);
        cartToken = cartData?.data?.attributes?.token;

        await AsyncStorage.setItem(CART_TOKEN, cartToken);
      }
    } catch (error) {
      console.error(error);
    }

    try {
      await fetch(`${API_URL}/cart/add_item`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/vnd.api+json',
          'X-Spree-Order-Token': cartToken,
        },
        body: JSON.stringify({
          variant_id: route.params?.productId,
          quantity: 1,
          public_metadata: {
            first_item_order: true,
          },
          private_metadata: {
            recommended_by_us: false,
          },
        }),
      });
    } catch (error) {
      console.error(error);
    }

    navigation.navigate(MODAL_ROUTES.PRODUCT_ADDED_TO_CART);
  }, [navigation, selectedOption, state.userToken]);

  const {height} = useWindowDimensions();

  return (
    <View style={{...commonStyles.safeArea, height}}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.mainWrapper}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.slider}>
          <ImagesSlider
            images={imagesList}
            onPressHandler={(imageId: string) => console.log(imageId)}
          />
        </View>

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

      <View style={[styles.cartButtonWrapper]}>
        <Button
          buttonColor={ButtonColor.Submit}
          text="ADD TO CART"
          onPressHandler={handleAddToCart}
        />
      </View>
    </View>
  );
};

export default ProductDetails;
