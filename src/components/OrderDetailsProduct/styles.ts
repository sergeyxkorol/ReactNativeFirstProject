import {StyleSheet} from 'react-native';
import commonStyles from '../../commonStyles';
import {FONT_SIZE, GREY, WHITE} from '../../constants';

const styles = StyleSheet.create({
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    elevation: 5,
    backgroundColor: WHITE,
  },

  productTitle: {
    ...commonStyles.text,
    marginBottom: 10,
    fontSize: FONT_SIZE,
  },

  productDescription: {
    ...commonStyles.text,
    fontSize: FONT_SIZE,
    color: GREY,
  },

  productTotal: {
    ...commonStyles.text,
    marginTop: 10,
    fontSize: FONT_SIZE,
    fontWeight: '700',
  },

  image: {
    height: 70,
    width: 70,
  },
});

export default styles;
