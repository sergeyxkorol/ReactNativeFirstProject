import {StyleSheet} from 'react-native';
import {BLUE_TEXT, FONT_FAMILY, GREY, MAIN_TEXT} from '../../constants';
// import CommonStyles from '../../CommonStyles';

const styles = StyleSheet.create({
  name: {
    fontFamily: FONT_FAMILY,
    fontSize: 15,
    lineHeight: 20,
    color: MAIN_TEXT,
  },

  priceWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },

  price: {
    // ...CommonStyles.productInfoText,
    paddingRight: 10,
    color: MAIN_TEXT,
  },

  oldPrice: {
    // ...CommonStyles.productInfoText,
    paddingRight: 10,
    textDecorationLine: 'line-through',
    color: GREY,
  },

  discount: {
    // ...CommonStyles.productInfoText,
    color: BLUE_TEXT,
  },
});

export default styles;
