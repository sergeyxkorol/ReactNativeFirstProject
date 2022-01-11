import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {View, Text} from 'react-native';
import commonStyles from '../../commonStyles';
import Button from '../../components/Button/Button';
import {ButtonColor} from '../../components/Button/Button.types';
import {MODAL_ROUTES} from '../../constants/routes';

const Profile: FC = () => {
  const navigation = useNavigation();

  const handleLogOut = () => {
    navigation.navigate(MODAL_ROUTES.LOGOUT);
  };

  return (
    <View style={commonStyles.generalWrapper}>
      <Text>My Profile</Text>

      <Button
        text="Logout"
        buttonColor={ButtonColor.Submit}
        onPressHandler={handleLogOut}
      />
    </View>
  );
};

export default Profile;
