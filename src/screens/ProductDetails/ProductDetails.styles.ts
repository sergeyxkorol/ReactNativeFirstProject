import {StyleSheet} from 'react-native';
import {GREY} from '../../constants';

const styles = StyleSheet.create({
  topBarButton: {
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tobBarButtonMargin: {
    marginLeft: 20,
  },

  tobBarButtonWrapper: {
    flexDirection: 'row',
  },

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
    bottom: 10,
    width: '100%',
    padding: 20,
  },
});

export default styles;
