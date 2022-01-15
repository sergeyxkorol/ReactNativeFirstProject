import {StyleSheet} from 'react-native';
import {FONT_FAMILY, FONT_SIZE, MAIN_TEXT} from '../../constants';

const styles = StyleSheet.create({
  drawerItem: {
    marginLeft: -5,
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZE,
    color: MAIN_TEXT,
  },

  drawerItemLabel: {
    marginLeft: -15,
  },
});

export default styles;
