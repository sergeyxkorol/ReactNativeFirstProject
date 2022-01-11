import React, {FC, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CartFull from './CartFull';
import CartEmpty from './CartEmpty';
import {API_URL, CART_TOKEN} from '../../constants';
import Loader from '../../components/Loader';

const Cart: FC = () => {
  const [cartToken, setCartToken] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [cartData, setCartData] = useState(null);
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    // ToDo: move this logic to action
    async function bootstrapAsync() {
      try {
        const token = await AsyncStorage.getItem(CART_TOKEN);
        let parsedCartData = null;

        if (token) {
          setCartToken(token);

          const response = await fetch(`${API_URL}/cart`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'X-Spree-Order-Token': token,
            },
          });

          parsedCartData = await response.json();

          setCartData(parsedCartData);
        }

        const productIds =
          parsedCartData?.data.relationships.line_items.data.map(({id}) => id);
        const url = `${API_URL}/products?filter[ids]=${productIds.join()}`;

        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const result = await response.json();
        setProductsList(result.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    bootstrapAsync();
  }, []);

  const onChangeCount = async (id: string, updatedCount: number) => {
    try {
      setIsLoading(true);

      const response = await fetch(`${API_URL}/cart/set_quantity`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'X-Spree-Order-Token': cartToken,
        },
        body: JSON.stringify({
          line_item_id: id,
          quantity: updatedCount,
        }),
      });

      const result = await response.json();

      setCartData(result);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onDeleteProduct = async (id: string) => {
    try {
      setIsLoading(true);

      const response = await fetch(`${API_URL}/cart/remove_line_item/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'X-Spree-Order-Token': cartToken,
        },
      });

      const result = await response.json();

      setCartData(result);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const cartContent = (
    <>
      {!cartData || !cartData?.data?.attributes.item_count ? (
        <CartEmpty />
      ) : (
        <CartFull
          cart={cartData.data}
          productsList={productsList}
          onChangeCount={onChangeCount}
          onDeleteProduct={onDeleteProduct}
        />
      )}
    </>
  );

  return <>{isLoading ? <Loader /> : cartContent}</>;
};

export default Cart;
