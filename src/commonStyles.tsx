import {StyleSheet} from 'react-native';
import {BLUE_TEXT, FONT_FAMILY, FONT_SIZE, MAIN_TEXT} from './constants';

const styles = StyleSheet.create({
  text: {
    fontFamily: FONT_FAMILY,
    lineHeight: 20,
    color: MAIN_TEXT,
  },

  textHeader: {
    fontSize: 20,
    fontWeight: '700',
  },

  textRegular: {
    fontSize: FONT_SIZE,
    lineHeight: 25,
    marginBottom: 10,
  },

  productInfoText: {
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZE,
    fontWeight: '700',
  },

  safeArea: {
    backgroundColor: '#fff',
  },

  topBarButton: {
    height: 25,
    width: 25,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    flex: 1,
  },

  generalWrapper: {
    paddingLeft: 20,
    paddingRight: 20,
  },

  pane: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#fff',
    elevation: 5,
  },

  titleLarge: {
    fontFamily: FONT_FAMILY,
    color: BLUE_TEXT,
    fontSize: 40,
    fontWeight: '700',
    lineHeight: 50,
    paddingLeft: 45,
    paddingRight: 45,
    textAlign: 'center',
  },

  formTitle: {
    marginTop: 70,
    marginBottom: 70,
  },

  inputWrapper: {
    marginBottom: 10,
  },

  linkWrapper: {
    alignItems: 'center',
  },
});

export default styles;
