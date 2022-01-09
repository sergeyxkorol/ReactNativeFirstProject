import React, {FC, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CartFull from './CartFull';
import CartEmpty from './CartEmpty';
import {API_URL, CART_TOKEN} from '../../constants';

const Cart: FC = () => {
  const [cartData, setCartData] = useState(null);

  useEffect(() => {
    // ToDo: move all this logic to action
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

        const result = await response.text();

        console.log(result);

        setCartData(result);
      }
    }

    bootstrapAsync();
  }, []);

  return <>{!cartData ? <CartEmpty /> : <CartFull cartData={cartData} />}</>;
};

export default Cart;
