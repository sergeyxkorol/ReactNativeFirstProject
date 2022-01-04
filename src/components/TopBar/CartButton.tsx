import React, {FC} from 'react';
import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../commonStyles';
import {STACK_ROUTES} from '../../constants/routes';

import CartIcon from '../../assets/icons/cart.svg';

const CartButton: FC = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate(STACK_ROUTES.CART)}
      style={styles.topBarButton}>
      <CartIcon fill="white" />
    </Pressable>
  );
};

export default CartButton;
