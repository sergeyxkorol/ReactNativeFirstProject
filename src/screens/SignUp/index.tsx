import {useNavigation, useRoute} from '@react-navigation/native';
import React, {FC, useContext, useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import commonStyles from '../../commonStyles';
import Button from '../../components/Button/Button';
import {ButtonColor} from '../../components/Button/Button.types';
import Link from '../../components/Link';
import TextInput from '../../components/TextInput';
import {
  KEYBOARD_VERTICAL_OFFSET_ANDROID,
  KEYBOARD_VERTICAL_OFFSET_IOS,
} from '../../constants';
import {STACK_ROUTES} from '../../constants/routes';
import AuthContext from '../../store/AuthContext';
import styles from './styles';

const SignUp: FC = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordConfirmationError, setPasswordConfirmationError] =
    useState('');

  const {actions} = useContext(AuthContext);
  const route = useRoute();

  async function submit() {
    if (!name || !email || !password || password !== passwordConfirmation) {
      if (!name) {
        setNameError('Name is required');
      }

      if (!email) {
        setEmailError('Email is required');
      }

      if (!password) {
        setPasswordError('Password is required');
      }

      if (password !== passwordConfirmation) {
        setPasswordConfirmationError("Password doesn't match");
      }

      return;
    }

    await actions.signUp(email, password, passwordConfirmation);

    navigation.navigate(route.params?.routeName, {...route.params});
  }

  function handleLogIn() {
    navigation.navigate(STACK_ROUTES.LOGIN, {...route.params});
  }

  const {height} = useWindowDimensions();
  const isIOS = Platform.OS === 'ios';
  const keyboardVerticalOffset = isIOS
    ? KEYBOARD_VERTICAL_OFFSET_IOS
    : KEYBOARD_VERTICAL_OFFSET_ANDROID;

  return (
    <SafeAreaView style={{height}}>
      <KeyboardAvoidingView
        behavior={isIOS ? 'padding' : 'height'}
        keyboardVerticalOffset={keyboardVerticalOffset}
        style={commonStyles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>
            <View style={commonStyles.generalWrapper}>
              <Text style={[commonStyles.formTitle, commonStyles.titleLarge]}>
                Ecommerce Store
              </Text>
              <View style={commonStyles.inputWrapper}>
                <TextInput
                  label="Full Name"
                  onChange={setName}
                  error={nameError}
                />
                <TextInput
                  label="Email Address"
                  onChange={setEmail}
                  error={emailError}
                />
                <TextInput
                  label="Password"
                  onChange={setPassword}
                  secureTextEntry={true}
                  error={passwordError}
                />
                <TextInput
                  label="Confirm Password"
                  onChange={setPasswordConfirmation}
                  secureTextEntry={true}
                  error={passwordConfirmationError}
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
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;
