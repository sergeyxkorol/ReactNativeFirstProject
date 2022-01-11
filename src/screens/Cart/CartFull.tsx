import React, {FC} from 'react';
import {View, useWindowDimensions, ScrollView, Text} from 'react-native';
import commonStyles from '../../commonStyles';
import Button from '../../components/Button/Button';
import {ButtonColor} from '../../components/Button/Button.types';
import CartInfo from '../../components/CartInfo';
import ProductItem from '../../components/ProductItem';
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

  productsList: [{id: string}];

  onChangeCount: (id: string, updatedCount: number) => void;
  onDeleteProduct: (id: string) => void;
};

const CartFull: FC<Props> = ({
  cart,
  productsList,
  onChangeCount,
  onDeleteProduct,
}) => {
  const {height} = useWindowDimensions();

  return (
    <View style={{...commonStyles.safeArea, height}}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={[commonStyles.generalWrapper, styles.wrapper]}>
        <View>
          {productsList.map(product => (
            <ProductItem
              key={product.id}
              data={product}
              count={1}
              onChangeCount={onChangeCount}
              onDelete={onDeleteProduct}
            />
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
