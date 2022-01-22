import {StyleSheet} from 'react-native';
import {DARK_GREEN, DARK_RED, WHITE} from '../../constants';

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },

  text: {
    color: WHITE,
  },

  status: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
