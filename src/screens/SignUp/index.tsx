import React, {FC, useState} from 'react';
import {View, Text} from 'react-native';
import Button from '../../components/Button/Button';
import {ButtonColor} from '../../components/Button/Button.types';
import TextInput from '../../components/TextInput';

const SignUp: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function submit() {
    console.log({email, password});
  }

  return (
    <View>
      <Text>Ecomerce Store</Text>

      <TextInput label="Email Address" onChange={setEmail} />
      <TextInput
        label="Password"
        onChange={setPassword}
        secureTextEntry={true}
      />

      <Button
        text="Sign Up"
        buttonColor={ButtonColor.Submit}
        onPressHandler={submit}
      />
    </View>
  );
};

export default SignUp;
