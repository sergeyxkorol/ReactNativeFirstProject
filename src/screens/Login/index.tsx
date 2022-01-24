import {useNavigation, useRoute} from '@react-navigation/native';
import React, {FC, useContext, useState} from 'react';
import {View, Text} from 'react-native';
import commonStyles from '../../commonStyles';
import Button from '../../components/Button/Button';
import {ButtonColor} from '../../components/Button/Button.types';
import Link from '../../components/Link';
import TextInput from '../../components/TextInput';
import {STACK_ROUTES} from '../../constants/routes';
import AuthContext from '../../store/AuthContext';
import styles from './styles';

type Errors = {
  email?: string;
  password?: string;
};

const Logout: FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<Errors>({});
  const {actions} = useContext(AuthContext);
  const route = useRoute();

  async function submit() {
    setErrors({});

    const formErrors = {
      ...(!email && {email: 'Email is required'}),
      ...(!password && {password: 'Password is required'}),
    };

    if (!Object.keys(formErrors).length) {
      await actions.logIn(email, password);
      navigation.navigate(route.params?.routeName, {...route.params});
    } else {
      setErrors(formErrors);
    }
  }

  function handleForgotPassword() {}

  function handleSignUp() {
    navigation.navigate(STACK_ROUTES.SIGN_UP, {...route.params});
  }

  return (
    <View style={commonStyles.generalWrapper}>
      <Text style={[commonStyles.formTitle, commonStyles.titleLarge]}>
        Ecommerce Store
      </Text>

      <View style={commonStyles.inputWrapper}>
        <View>
          <TextInput
            label="Email Address"
            onChange={setEmail}
            error={errors?.email}
          />
        </View>
        <View>
          <TextInput
            label="Password"
            onChange={setPassword}
            secureTextEntry={true}
            error={errors?.password}
          />
        </View>
        <Link text="Forgot Password?" onPressHandler={handleForgotPassword} />
      </View>

      <View style={styles.buttonWrapper}>
        <Button
          text="Sign In"
          buttonColor={ButtonColor.Submit}
          onPressHandler={submit}
        />
      </View>

      <View style={commonStyles.linkWrapper}>
        <Link text="New here? Sign Up" onPressHandler={handleSignUp} />
      </View>
    </View>
  );
};

export default Logout;
