import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import {STACK_ROUTES} from '../../constants/routes';
import Fireworks from '../../components/Fireworks';
import {WHITE} from '../../constants';
import GeneralInfo from '../GeneralInfo';

import CartConfirmIcon from '../../assets/avatars/CartConfirm.svg';

const OrderConfirmation: FC = () => {
  const navigation = useNavigation();

  function handleButtonPress() {
    navigation.navigate(STACK_ROUTES.MAIN);
  }

  return (
    <>
      <Fireworks duration={400} explosionsCount={4} />
      <GeneralInfo
        headerText="Order Confirmation"
        icon={<CartConfirmIcon fill={WHITE} />}
        title="Thank you for placing your order with us!"
        description="Please check your email for more details. For any questions and further information please contact our customer support."
        buttonText="Continue Shopping"
        handleButtonPress={handleButtonPress}
      />
    </>
  );
};

export default OrderConfirmation;
