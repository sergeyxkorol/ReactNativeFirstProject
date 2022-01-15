import {StyleSheet} from 'react-native';
import {GREY, WHITE} from '../../constants';

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 25,
  },

  label: {
    position: 'absolute',
    top: -9,
    left: 15,
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
  },
});

export default styles;
