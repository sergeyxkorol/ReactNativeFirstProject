import {useNavigation, useRoute} from '@react-navigation/native';
import React, {FC} from 'react';
import {STACK_ROUTES} from '../../constants/routes';
import {WHITE} from '../../constants';
import GeneralInfo from '../GeneralInfo';

import OrdersLoginIcon from '../../assets/avatars/OrdersLogin.svg';

const OrdersLogin: FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  function logIn() {
    navigation.navigate(STACK_ROUTES.LOGIN, {routeName: route.name});
  }

  function signUp() {
    navigation.navigate(STACK_ROUTES.SIGN_UP, {routeName: route.name});
  }

  return (
    <GeneralInfo
      icon={<OrdersLoginIcon fill={WHITE} />}
      title="Login First!"
      description="Login first to view your orders"
      buttonText="Login Now"
      handleButtonPress={logIn}
      linkText="New here? Sign Up"
      handleLinkPress={signUp}
    />
  );
};

export default OrdersLogin;
