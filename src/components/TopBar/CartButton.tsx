import React, {FC} from 'react';
import {Pressable} from 'react-native';
import styles from '../../commonStyles';

import CartIcon from '../../assets/icons/cart.svg';

const CartButton: FC = () => (
  <Pressable
    onPress={() => console.log('Cart button pressed')}
    style={styles.topBarButton}>
    <CartIcon fill="white" />
  </Pressable>
);

export default CartButton;
