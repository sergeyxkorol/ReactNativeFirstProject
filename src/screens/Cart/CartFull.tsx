import React, {FC, useEffect, useState} from 'react';
import {View, useWindowDimensions, ScrollView, Text} from 'react-native';
import commonStyles from '../../commonStyles';
import Button from '../../components/Button/Button';
import {ButtonColor} from '../../components/Button/Button.types';
import CartInfo from '../../components/CartInfo';
import ProductItem from '../../components/ProductItem';
import {API_URL} from '../../constants';
import styles from './styles';

import PaymentIcon from '../../assets/icons/payment.svg';

type Props = {
  cart: {
    relationships: {
      line_items: {data: []};
    };
    attributes: {
      item_count: number;
      display_item_total: number;
      display_ship_total: string;
      display_adjustment_total: string;
      display_tax_total: string;
      display_total: string;
    };
  };
};

const CartFull: FC<Props> = ({cart}) => {
  const lineItems = cart.relationships.line_items.data || [];
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    async function bootstrapAsync() {
      const productIds = lineItems.map(({id}) => id);
      const url = `${API_URL}/products?filter[ids]=${productIds.join()}`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();
      setProductsList(result.data);
    }

    bootstrapAsync();
  }, [lineItems]);

  const {height} = useWindowDimensions();

  return (
    <View style={{...commonStyles.safeArea, height}}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={[commonStyles.generalWrapper, styles.wrapper]}>
        <View>
          {productsList.map(product => (
            <ProductItem data={product} />
          ))}
        </View>

        <CartInfo data={cart.attributes} />

        <View style={styles.paymentWrapper}>
          <View style={styles.paymentIcon}>
            <PaymentIcon />
          </View>
          <View>
            <Text style={styles.paymentInfo}>Safe and Secure Payments</Text>
            <Text style={styles.paymentInfo}>100% Authentic Ptoducts</Text>
          </View>
        </View>
      </ScrollView>

      <View style={[styles.buttonWrapper]}>
        <Button
          buttonColor={ButtonColor.Submit}
          text="Proceed To Payment"
          onPressHandler={() => console.log('Proceed To Payment pressed')}
        />
      </View>
    </View>
  );
};

export default CartFull;
