import {StyleSheet} from 'react-native';
import {
  DARK_GREEN,
  DARK_RED,
  FONT_FAMILY,
  FONT_SIZE,
  WHITE,
} from '../../constants';

const styles = StyleSheet.create({
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    borderRadius: 5,
    elevation: 5,
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },

  text: {
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZE,
    textTransform: 'uppercase',
    color: WHITE,
  },

  status: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },

  statusIcon: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: 0,
    height: 40,
    width: 40,
    borderRadius: 5,
  },

  statusIconSuccess: {
    backgroundColor: DARK_GREEN,
  },

  statusIconFailed: {
    backgroundColor: DARK_RED,
  },
});

export default styles;
