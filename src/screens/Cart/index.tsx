import React, {FC, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CartFull from './CartFull';
import CartEmpty from './CartEmpty';
import {API_URL, CART_TOKEN} from '../../constants';
import Loader from '../../components/Loader';

const Cart: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cartData, setCartData] = useState(null);

  useEffect(() => {
    // ToDo: move this logic to action
    async function bootstrapAsync() {
      const token = await AsyncStorage.getItem(CART_TOKEN);

      if (token) {
        const response = await fetch(`${API_URL}/cart`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Spree-Order-Token': token,
          },
        });

        const result = await response.json();

        setCartData(result);
      }

      setIsLoading(false);
    }

    bootstrapAsync();
  }, []);

  const cartContent = (
    <>
      {!cartData || !Math.ceil(cartData?.data.attributes.total) ? (
        <CartEmpty />
      ) : (
        <CartFull cartData={cartData} />
      )}
    </>
  );

  return <>{isLoading ? <Loader /> : cartContent}</>;
};

export default Cart;
