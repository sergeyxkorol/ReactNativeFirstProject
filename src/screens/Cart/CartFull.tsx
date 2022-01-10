import React, {FC} from 'react';
import {View, Text} from 'react-native';

type Props = {
  cartData: {};
};

const CartFull: FC<Props> = ({cartData}) => {
  const productsList = cartData.data.relationships.line_items || [];

  return (
    <View>
      <Text>My Cart</Text>
      <Text>{JSON.stringify(cartData)}</Text>
    </View>
  );
};

export default CartFull;
