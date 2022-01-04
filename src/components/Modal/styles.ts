import {StyleSheet} from 'react-native';
import {FONT_FAMILY, GREY} from '../../constants';

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  modal: {
    alignItems: 'center',
    borderRadius: 5,
    paddingTop: 15,
    paddingBottom: 30,
    paddingLeft: 45,
    paddingRight: 45,
    backgroundColor: 'white',
  },

  icon: {
    marginBottom: 5,
  },

  title: {
    marginBottom: 15,
    fontFamily: FONT_FAMILY,
    fontSize: 20,
    fontWeight: '700',
    color: GREY,
  },

  description: {
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: FONT_FAMILY,
    fontSize: 15,
    lineHeight: 20,
    color: GREY,
  },

  buttons: {
    minWidth: 125,
    marginTop: 10,
  },
});

export default styles;
