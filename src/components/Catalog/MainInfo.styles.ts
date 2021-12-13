import {StyleSheet} from 'react-native';
import {BLUE_TEXT, FONT_FAMILY, GREY, MAIN_TEXT} from '../../constants';
import commonStyles from '../../commonStyles';

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
    ...commonStyles.productInfoText,
    paddingRight: 10,
    color: MAIN_TEXT,
  },

  oldPrice: {
    ...commonStyles.productInfoText,
    paddingRight: 10,
    textDecorationLine: 'line-through',
    color: GREY,
  },

  discount: {
    ...commonStyles.productInfoText,
    color: BLUE_TEXT,
  },
});

export default styles;
