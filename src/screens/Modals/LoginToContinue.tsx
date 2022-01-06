import React, {FC} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Modal from '../../components/Modal/Modal';
import Button from '../../components/Button/Button';
import {ButtonColor} from '../../components/Button/Button.types';
import {STACK_ROUTES} from '../../constants/routes';
import styles from './styles';

import ClaimCircleIcon from '../../assets/graphic/claim-circle.svg';

const LoginToContinue: FC = () => {
  const navigation = useNavigation();

  const buttons = (
    <View style={styles.buttonsWrapper}>
      <View style={styles.button}>
        <Button
          text="LOGIN"
          buttonColor={ButtonColor.Submit}
          onPressHandler={() => navigation.navigate(STACK_ROUTES.LOGIN)}
        />
      </View>
      <View style={styles.button}>
        <Button
          text="SIGN UP"
          buttonColor={ButtonColor.Submit}
          onPressHandler={() => navigation.navigate(STACK_ROUTES.SIGN_UP)}
        />
      </View>
    </View>
  );

  return (
    <Modal
      icon={<ClaimCircleIcon />}
      title="Login To Continue"
      description="Please login to add product in your cart"
      buttons={buttons}
    />
  );
};

export default LoginToContinue;
