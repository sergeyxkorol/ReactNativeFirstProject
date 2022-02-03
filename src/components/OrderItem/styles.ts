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

  link: {
    marginTop: 10,
  },
});

export default styles;
