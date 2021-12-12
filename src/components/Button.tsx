import React, {FC, useCallback} from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
import {BLUE, FONT_FAMILY, FONT_SIZE, GREY, RED} from '../constants';

export enum ButtonColor {
  Submit = 'Submit',
  Cancel = 'Cancel',
  Grayed = 'Grayed',
}

const Button: FC<{
  buttonColor: ButtonColor;
  text: string;
  onPressHandler: Function;
}> = ({buttonColor, text, onPressHandler}) => {
  const onPress = useCallback(() => {
    onPressHandler();
  }, [onPressHandler]);

  return (
    <Pressable style={[styles.button, styles[buttonColor]]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
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
