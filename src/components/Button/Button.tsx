import React, {FC, useCallback} from 'react';
import {TouchableHighlight, Text} from 'react-native';
import styles from './styles';
import {ButtonColor} from './Button.types';

type Props = {
  buttonColor: ButtonColor;
  text: string;
  onPressHandler: Function;
};

const Button: FC<Props> = ({buttonColor, text, onPressHandler}) => {
  const onPress = useCallback(() => {
    onPressHandler();
  }, [onPressHandler]);

  return (
    <TouchableHighlight
      style={[styles.button, styles[buttonColor]]}
      underlayColor="#ccc"
      onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableHighlight>
  );
};

export default Button;
