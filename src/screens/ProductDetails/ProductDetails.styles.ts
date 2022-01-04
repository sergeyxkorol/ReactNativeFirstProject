import {StyleSheet} from 'react-native';
import {GREY} from '../../constants';

const styles = StyleSheet.create({
  mainWrapper: {
    paddingBottom: 70,
  },

  content: {
    backgroundColor: 'white',
  },

  section: {
    paddingTop: 20,
    paddingBottom: 15,
    marginLeft: 20,
    marginRight: 20,
  },

  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: GREY,
  },

  headerWrapper: {
    marginBottom: 10,
  },

  slider: {
    marginTop: 20,
  },

  cartButtonWrapper: {
    position: 'absolute',
    bottom: 70,
    width: '100%',
    padding: 20,
  },
});

export default styles;
