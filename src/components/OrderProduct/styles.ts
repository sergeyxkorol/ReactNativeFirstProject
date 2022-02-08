import {StyleSheet} from 'react-native';
import {LIGHT_GREY, MAIN_TEXT} from '../../constants';

const styles = StyleSheet.create({
  product: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: LIGHT_GREY,
  },

  productTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: MAIN_TEXT,
  },

  image: {
    height: 100,
    width: 100,
  },
});

export default styles;
