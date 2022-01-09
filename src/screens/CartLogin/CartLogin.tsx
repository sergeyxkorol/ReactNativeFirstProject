import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {STACK_ROUTES} from '../../constants/routes';
import GeneralInfo from '../GeneralInfo';

import CartLoginFirstIcon from '../../assets/avatars/CartLoginFirst.svg';

const CartLogin: FC = () => {
  const navigation = useNavigation();

  function logIn() {
    navigation.navigate(STACK_ROUTES.LOGIN);
  }

  function handleLogIn() {
    navigation.navigate(STACK_ROUTES.SIGN_UP);
  }

  return (
    <GeneralInfo
      icon={<CartLoginFirstIcon />}
      title="Login First!"
      description="Login first to view your cart"
      buttonText="Login Now"
      handleButtonPress={logIn}
      linkText="New here? Sign Up"
      handleLinkPress={handleLogIn}
    />
  );
};

export default CartLogin;
