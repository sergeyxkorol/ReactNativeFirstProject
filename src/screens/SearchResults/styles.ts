import {StyleSheet} from 'react-native';
import {GREY, WHITE} from '../../constants';

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 36,
    paddingBottom: 170,
  },

  search: {
    padding: 20,
    paddingBottom: 0,
    backgroundColor: WHITE,
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

  searchInput: {
    flex: 1,
    height: 34,
  },
});

export default styles;
