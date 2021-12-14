import {StyleSheet} from 'react-native';
import {BLUE, FONT_FAMILY, FONT_SIZE, GREY, RED} from '../../constants';
import {ButtonColor} from './Button.types';

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

export default styles;
