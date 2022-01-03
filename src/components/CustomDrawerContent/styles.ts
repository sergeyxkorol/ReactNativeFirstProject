import {StyleSheet} from 'react-native';
import {BLUE, FONT_FAMILY, FONT_SIZE, GREY, MAIN_TEXT} from '../../constants';

const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: 10,
  },

  sectionWrapper: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 10,
  },

  mainTitle: {
    marginBottom: 40,
    fontFamily: FONT_FAMILY,
    fontSize: 40,
    fontWeight: '700',
    color: BLUE,
  },

  blockWrapper: {
    borderTopWidth: 1,
    borderTopColor: GREY,
  },

  label: {
    marginBottom: 20,
    fontFamily: FONT_FAMILY,
    fontSize: 20,
    fontWeight: '700',
    color: GREY,
  },

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
