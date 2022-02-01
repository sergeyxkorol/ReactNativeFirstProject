import {StyleSheet} from 'react-native';
import {GREEN, GREY} from '../../constants';

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 30,
  },

  info: {
    marginBottom: 35,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  label: {
    flexGrow: 1,
  },

  descritpion: {
    flexGrow: 4,
    flexShrink: 1,
    textAlign: 'right',
    paddingLeft: 30,
  },

  text: {
    color: GREY,
    paddingRight: 10,
  },

  status: {
    color: GREEN,
  },

  headerText: {
    marginBottom: 25,
    color: GREY,
  },
});

export default styles;
