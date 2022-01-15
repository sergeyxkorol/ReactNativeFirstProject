import {StyleSheet} from 'react-native';
import {BLUE, FONT_FAMILY, GREY} from '../../constants';

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
});

export default styles;
