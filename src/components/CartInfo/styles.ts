import {StyleSheet} from 'react-native';
import {BLUE, GREY, MAIN_TEXT} from '../../constants';

const styles = StyleSheet.create({
  pane: {
    paddingTop: 7,
    paddingRight: 10,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  topBorder: {
    marginTop: 5,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: GREY,
  },

  textHeader: {
    marginBottom: 20,
    color: GREY,
  },

  text: {
    lineHeight: 20,
    color: GREY,
  },

  discount: {
    color: BLUE,
  },

  textTotal: {
    color: MAIN_TEXT,
  },
});

export default styles;
