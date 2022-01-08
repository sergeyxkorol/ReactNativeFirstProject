import {StyleSheet} from 'react-native';
import {GREY} from '../../constants';

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 25,
  },

  label: {
    position: 'absolute',
    top: -9,
    left: 15,
    zIndex: 1,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: 'white',
  },

  input: {
    height: 40,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: GREY,
  },
});

export default styles;
