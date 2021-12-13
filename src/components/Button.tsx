import React, {FC, useCallback} from 'react';
import {TouchableHighlight, Text, StyleSheet} from 'react-native';
import {BLUE, FONT_FAMILY, FONT_SIZE, GREY, RED} from '../constants';

export enum ButtonColor {
  Submit = 'Submit',
  Cancel = 'Cancel',
  Grayed = 'Grayed',
}

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

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 5,
    elevation: 5,
  },

  [ButtonColor.Submit]: {
    backgroundColor: BLUE,
  },

  [ButtonColor.Cancel]: {
    backgroundColor: RED,
  },

  [ButtonColor.Grayed]: {
    backgroundColor: GREY,
  },

  text: {
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZE,
    color: 'white',
  },
});

export default Button;
