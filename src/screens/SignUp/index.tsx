import {useNavigation, useRoute} from '@react-navigation/native';
import React, {FC, useContext, useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import commonStyles from '../../commonStyles';
import Button from '../../components/Button/Button';
import {ButtonColor} from '../../components/Button/Button.types';
import Link from '../../components/Link';
import TextInput from '../../components/TextInput';
import {STACK_ROUTES} from '../../constants/routes';
import AuthContext from '../../store/AuthContext';
import styles from './styles';

const SignUp: FC = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const {actions} = useContext(AuthContext);
  const route = useRoute();

  async function submit() {
    if (!name || !email || !password || password !== passwordConfirmation) {
      return;
    }

    await actions.signUp(email, password, passwordConfirmation);

    navigation.navigate(route.params?.routeName, {...route.params});
  }

  function handleLogIn() {
    navigation.navigate(STACK_ROUTES.LOGIN, {...route.params});
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={commonStyles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={commonStyles.generalWrapper}>
          <Text style={[commonStyles.formTitle, commonStyles.titleLarge]}>
            Ecommerce Store
          </Text>

          <View style={commonStyles.inputWrapper}>
            <TextInput label="Full Name" onChange={setName} />
            <TextInput label="Email Address" onChange={setEmail} />
            <TextInput
              label="Password"
              onChange={setPassword}
              secureTextEntry={true}
            />
            <TextInput
              label="Confirm Password"
              onChange={setPasswordConfirmation}
              secureTextEntry={true}
            />
          </View>

          <View style={styles.buttonWrapper}>
            <Button
              text="Sign Up"
              buttonColor={ButtonColor.Submit}
              onPressHandler={submit}
            />
          </View>

          <View style={commonStyles.linkWrapper}>
            <Link
              text="Already have account? Sign In"
              onPressHandler={handleLogIn}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
