import {StyleSheet} from 'react-native';
import {GREY, LIGHT_GREY, MAIN_TEXT, WHITE} from '../../constants';

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 30,
  },

  orderItem: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: WHITE,
    elevation: 5,
  },

  date: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  dateText: {
    marginRight: 10,
    fontSize: 15,
    color: GREY,
  },

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

  link: {
    marginTop: 10,
  },
});

export default styles;
