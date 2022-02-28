import React, {FC, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  NativeModules,
  LayoutAnimation,
  Pressable,
  Animated,
} from 'react-native';
import TextInputProps from './TextInputProps';
import styles from './styles';
import {ERROR_MESSAGE_TOP_OFFSET} from '../../constants';

const CustomTextInput: FC<TextInputProps> = ({
  label,
  defaultValue = '',
  onChange,
  secureTextEntry = false,
  error = null,
}) => {
  const {UIManager} = NativeModules;
  UIManager.setLayoutAnimationEnabledExperimental?.(true);

  const inputRef = useRef(null);
  const translation = useRef(new Animated.Value(0)).current;
  const [value, setValue] = useState('');
  const [errorMessagePositionTop, setErrorMessagePositionTop] = useState(0);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    if (value.length) {
      Animated.timing(translation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [translation, value]);

  useEffect(() => {
    if (error) {
      LayoutAnimation.spring();
      setErrorMessagePositionTop(ERROR_MESSAGE_TOP_OFFSET);
    }
  }, [error]);

  function onPressInputWrapper() {
    inputRef.current.focus();
  }

  function onFocus() {
    Animated.timing(translation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }

  function onBlur() {
    if (!value.length) {
      Animated.timing(translation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }

  function handleTextChange(text: string) {
    setValue(text);
    onChange(text);
  }

  return (
    <View style={styles.wrapper}>
      <Pressable
        style={styles.inputWrapper}
        onPress={onPressInputWrapper}
        testID="textInputWrapper">
        <Animated.Text
          style={[
            styles.label,
            {
              transform: [
                {
                  translateX: translation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [2, 15],
                  }),
                },
                {
                  translateY: translation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [9, -9],
                  }),
                },
              ],
            },
          ]}>
          {label}
        </Animated.Text>
        <TextInput
          ref={inputRef}
          value={value}
          onChangeText={handleTextChange}
          onFocus={onFocus}
          onBlur={onBlur}
          secureTextEntry={secureTextEntry}
          style={styles.input}
          testID="textInput"
        />
      </Pressable>
      {!!error && (
        <Text
          style={[styles.error, {top: errorMessagePositionTop}]}
          testID="textInputError">
          {error}
        </Text>
      )}
    </View>
  );
};

export default CustomTextInput;
