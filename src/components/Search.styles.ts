import {StyleSheet} from 'react-native';
import {GREY} from '../constants';

const styles = StyleSheet.create({
  search: {
    padding: 20,
    backgroundColor: '#fff',
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

  searchInput: {
    flex: 1,
    height: 34,
  },
});

export default styles;
