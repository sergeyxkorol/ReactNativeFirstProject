import {StyleSheet} from 'react-native';
import commonStyles from '../../commonStyles';
import {GREY, WHITE} from '../../constants';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 30,
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
    ...commonStyles.text,
    flex: 1,
    height: 34,
    paddingVertical: 0,
    paddingHorizontal: 10,
  },

  historyContainer: {
    backgroundColor: WHITE,
    elevation: 5,
  },

  historyList: {
    maxHeight: 250,
  },
});

export default styles;
