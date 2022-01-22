import React, {FC} from 'react';
import {View, Text} from 'react-native';
import LoadingButton from '../../components/LoadingButton';

const Orders: FC = () => (
  <View>
    <Text>My Orders</Text>

    <LoadingButton
      title="ADD TO CART"
      callback={() => new Promise(resolve => setTimeout(resolve, 3000))}
    />
  </View>
);

export default Orders;
