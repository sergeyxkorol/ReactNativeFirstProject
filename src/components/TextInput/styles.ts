import {StyleSheet} from 'react-native';
import {GREY, RED, WHITE} from '../../constants';

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 25,
  },

  inputWrapper: {},

  label: {
    position: 'absolute',
    top: 0,
    left: 0,
    transform: [{translateX: 2}, {translateY: 14}],
    zIndex: 1,
    paddingHorizontal: 5,
    backgroundColor: WHITE,
  },

  input: {
    height: 40,
    paddingHorizontal: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: GREY,
    fontSize: 15,
  },

  error: {
    color: RED,
    top: 0,
    left: 0,
  },
});

export default styles;
