import {StyleSheet} from 'react-native';
import {MAIN_TEXT} from './constants';

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto',
    lineHeight: 20,
    color: MAIN_TEXT,
  },

  textHeader: {
    fontSize: 20,
    fontWeight: '700',
  },

  textRegular: {
    fontSize: 15,
    lineHeight: 25,
    marginBottom: 10,
  },

  productInfoText: {
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: '700',
  },
});

export default styles;
