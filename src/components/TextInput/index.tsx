import React, {FC, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  NativeModules,
  LayoutAnimation,
  Pressable,
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

  const inputRef = useRef(null);
  const [value, setValue] = useState('');
  const [errorMessagePositionTop, setErrorMessagePositionTop] = useState(0);
  const [labelPositionTop, setLabelPositionTop] = useState(9);
  const [labelPositionLeft, setLabelPositionLeft] = useState(2);

  useEffect(() => {
    if (error) {
      LayoutAnimation.spring();
      setErrorMessagePositionTop(5);
    }
  }, [error]);

  function onPressInputWrapper() {
    inputRef.current.focus();
  }

  function onFocus() {
    LayoutAnimation.linear();
    setLabelPositionTop(-9);
    setLabelPositionLeft(15);
  }

  function onBlur() {
    if (!value.length) {
      LayoutAnimation.linear();
      setLabelPositionTop(9);
      setLabelPositionLeft(2);
    }
  }

  function handleTextChange(text: string) {
    setValue(text);
    onChange(text);
  }

  return (
    <View style={styles.wrapper}>
      <Pressable style={styles.inputWrapper} onPress={onPressInputWrapper}>
        <Text
          style={[
            styles.label,
            {top: labelPositionTop, left: labelPositionLeft},
          ]}>
          {label}
        </Text>
        <TextInput
          ref={inputRef}
          value={value}
          onChangeText={handleTextChange}
          onFocus={onFocus}
          onBlur={onBlur}
          secureTextEntry={secureTextEntry}
          style={styles.input}
        />
      </Pressable>
      {!!error && (
        <Text style={[styles.error, {top: errorMessagePositionTop}]}>
          {error}
        </Text>
      )}
    </View>
  );
};

export default CustomTextInput;
