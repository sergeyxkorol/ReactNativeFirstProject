import {StyleSheet} from 'react-native';
import commonStyles from '../../commonStyles';
import {GREY, WHITE} from '../../constants';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor: WHITE,
  },

  container1: {
    borderWidth: 1,
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
    position: 'absolute',
    top: 34,
    left: -20,
    width: '100%',
    marginHorizontal: 20,
    backgroundColor: WHITE,
    elevation: 5,
  },
});

export default styles;
