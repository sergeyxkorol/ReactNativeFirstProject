import {StyleSheet} from 'react-native';
import {GREY} from '../../constants';

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },

  headerWrapper: {
    alignItems: 'center',
  },

  headerText: {},

  icon: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },

  title: {
    marginBottom: 5,
    textAlign: 'center',
    color: GREY,
  },

  description: {
    marginBottom: 30,
    textAlign: 'center',
    color: GREY,
  },

  buttonWrapper: {
    marginBottom: 25,
  },
});

export default styles;
