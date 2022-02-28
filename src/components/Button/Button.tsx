import React, {FC} from 'react';
import {TouchableHighlight, Text, GestureResponderEvent} from 'react-native';
import styles from './styles';
import {ButtonColor} from './Button.types';

type Props = {
  buttonColor: ButtonColor;
  text: string;
  onPressHandler: (event: GestureResponderEvent) => void;
};

const Button: FC<Props> = ({buttonColor, text, onPressHandler}) => (
  <TouchableHighlight
    style={[styles.button, styles[buttonColor]]}
    underlayColor="#ccc"
    onPress={onPressHandler}
    testID="button">
    <Text style={styles.text}>{text}</Text>
  </TouchableHighlight>
);

export default Button;
