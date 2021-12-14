import {StyleSheet} from 'react-native';
import {FONT_FAMILY} from '../../constants';

const styles = StyleSheet.create({
  topBarText: {
    fontFamily: FONT_FAMILY,
    fontSize: 20,
    color: '#fff',
  },

  topBarTextWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
