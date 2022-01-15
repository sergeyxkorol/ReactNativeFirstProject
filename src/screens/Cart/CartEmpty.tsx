import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import {STACK_ROUTES} from '../../constants/routes';
import GeneralInfo from '../GeneralInfo';

import CartEmptyIcon from '../../assets/avatars/CartEmpty.svg';

const CartLogin: FC = () => {
  const navigation = useNavigation();

  function handleButtonPress() {
    navigation.navigate(STACK_ROUTES.MAIN);
  }

  return (
    <GeneralInfo
      icon={<CartEmptyIcon />}
      title="Your Cart is Empty!"
      description="Add product in your cart now"
      buttonText="Shop now"
      handleButtonPress={handleButtonPress}
    />
  );
};

export default CartLogin;
