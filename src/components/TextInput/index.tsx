import React, {FC, useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  NativeModules,
  LayoutAnimation,
} from 'react-native';
import TextInputProps from './TextInputProps';
import styles from './styles';

const CustomTextInput: FC<TextInputProps> = ({
  label,
  onChange,
  secureTextEntry = false,
  error = null,
}) => {
  const {UIManager} = NativeModules;
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);

  const [value, setValue] = useState('');
  const [errorMessageY, setErrorMessageY] = useState(0);

  useEffect(() => {
    if (error) {
      LayoutAnimation.spring();
      setErrorMessageY(5);
    }
  }, [error]);

  function handleTextChange(text: string) {
    setValue(text);
    onChange(text);
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.inputWrapper}>
        <Text style={[styles.label]}>{label}</Text>
        <TextInput
          placeholder="Text"
          value={value}
          onChangeText={handleTextChange}
          secureTextEntry={secureTextEntry}
          style={styles.input}
        />
      </View>
      {!!error && (
        <Text style={[styles.error, {top: errorMessageY}]}>{error}</Text>
      )}
    </View>
  );
};

export default CustomTextInput;
