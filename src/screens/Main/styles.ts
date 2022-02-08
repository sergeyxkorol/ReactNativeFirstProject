import {StyleSheet} from 'react-native';
import {GREY, WHITE} from '../../constants';

const styles = StyleSheet.create({
  mainWrapper: {
    paddingBottom: 120,
  },

  search: {
    padding: 20,
    backgroundColor: WHITE,
    elevation: 5,
  },

  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 34,
    paddingLeft: 14,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: GREY,
  },
});

export default styles;
