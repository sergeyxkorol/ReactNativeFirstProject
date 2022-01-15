import {StyleSheet} from 'react-native';
import {WHITE} from '../../constants';

const styles = StyleSheet.create({
  catalogItem: {
    alignItems: 'center',
    padding: 5,
    borderRadius: 5,
    backgroundColor: WHITE,
    elevation: 5,
  },

  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },

  image: {
    height: 100,
    width: 100,
  },
});

export default styles;
