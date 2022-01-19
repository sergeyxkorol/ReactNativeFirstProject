import {StyleSheet} from 'react-native';
import {BLUE_TEXT, GREY} from '../../constants';

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },

  headerWrapper: {
    alignItems: 'center',
    paddingHorizontal: 40,
    marginBottom: 10,
  },

  headerText: {
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
    color: BLUE_TEXT,
  },

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
