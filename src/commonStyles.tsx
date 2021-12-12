import {StyleSheet} from 'react-native';
import {BLUE, MAIN_TEXT} from './constants';

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

  button: {
    height: 40,
    borderRadius: 5,
    backgroundColor: BLUE,
    fontWeight: '500',
    color: 'white',
    elevation: 5,
  },
});

export default styles;
