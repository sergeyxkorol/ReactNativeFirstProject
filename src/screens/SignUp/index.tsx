import {useNavigation, useRoute} from '@react-navigation/native';
import React, {FC, useContext, useState} from 'react';
import {View, Text} from 'react-native';
import commonStyles from '../../commonStyles';
import Button from '../../components/Button/Button';
import {ButtonColor} from '../../components/Button/Button.types';
import Link from '../../components/Link';
import ScreenWithKeyboard from '../../components/ScreenWithKeyboard';
import TextInput from '../../components/TextInput';
import {STACK_ROUTES} from '../../constants/routes';
import AuthContext from '../../store/AuthContext';
import styles from './styles';

type Errors = {
  name?: string;
  email?: string;
  password?: string;
  passwordConfirmation?: string;
};

const SignUp: FC = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [errors, setErrors] = useState<Errors>({});

  const {actions} = useContext(AuthContext);
  const route = useRoute();

  async function submit() {
    setErrors({});
    const formErrors = {
      ...(!name && {name: 'Name is required'}),
      ...(!email && {email: 'Email is required'}),
      ...(!password && {password: 'Password is required'}),
      ...(password !== passwordConfirmation && {
        passwordConfirmation: "Password doesn't match",
      }),
    };

    if (!Object.keys(formErrors).length) {
      await actions.signUp(email, password, passwordConfirmation);
      navigation.navigate(route.params?.routeName, {...route.params});
    } else {
      setErrors(formErrors);
    }
  }

  function handleLogIn() {
    navigation.navigate(STACK_ROUTES.LOGIN, {...route.params});
  }

  return (
    <ScreenWithKeyboard>
      <View style={commonStyles.generalWrapper}>
        <Text style={[commonStyles.formTitle, commonStyles.titleLarge]}>
          Ecommerce Store
        </Text>
        <View style={commonStyles.inputWrapper}>
          <TextInput label="Full Name" onChange={setName} error={errors.name} />
          <TextInput
            label="Email Address"
            onChange={setEmail}
            error={errors.email}
          />
          <TextInput
            label="Password"
            onChange={setPassword}
            secureTextEntry={true}
            error={errors.password}
          />
          <TextInput
            label="Confirm Password"
            onChange={setPasswordConfirmation}
            secureTextEntry={true}
            error={errors.passwordConfirmation}
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
    </ScreenWithKeyboard>
  );
};

export default SignUp;
