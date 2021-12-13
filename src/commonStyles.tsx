import {StyleSheet} from 'react-native';
import {FONT_FAMILY, FONT_SIZE, MAIN_TEXT} from './constants';

const styles = StyleSheet.create({
  text: {
    fontFamily: FONT_FAMILY,
    lineHeight: 20,
    color: MAIN_TEXT,
  },

  textHeader: {
    fontSize: 20,
    fontWeight: '700',
  },

  textRegular: {
    fontSize: FONT_SIZE,
    lineHeight: 25,
    marginBottom: 10,
  },

  productInfoText: {
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZE,
    fontWeight: '700',
  },
});

export default styles;
