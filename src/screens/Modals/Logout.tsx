import React, {FC, useContext} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Modal from '../../components/Modal/Modal';
import Button from '../../components/Button/Button';
import {ButtonColor} from '../../components/Button/Button.types';
import {STACK_ROUTES} from '../../constants/routes';
import AuthContext from '../../store/AuthContext';
import styles from './styles';

import ClaimCircleIcon from '../../assets/graphic/claim-circle.svg';

const Logout: FC = () => {
  const navigation = useNavigation();
  const {actions} = useContext(AuthContext);

  const handleLogout = async () => {
    await actions.logOut();

    navigation.navigate(STACK_ROUTES.MAIN);
  };

  const buttons = (
    <View style={styles.buttonsWrapper}>
      <View style={styles.button}>
        <Button
          text="Cancel"
          buttonColor={ButtonColor.Cancel}
          onPressHandler={navigation.goBack}
        />
      </View>
      <View style={styles.button}>
        <Button
          text="Logout"
          buttonColor={ButtonColor.Submit}
          onPressHandler={handleLogout}
        />
      </View>
    </View>
  );

  return (
    <Modal
      icon={<ClaimCircleIcon />}
      title="Are you sure you want to logout?"
      buttons={buttons}
    />
  );
};

export default Logout;
