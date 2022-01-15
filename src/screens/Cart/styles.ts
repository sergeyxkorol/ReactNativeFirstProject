import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 36,
    paddingBottom: 170,
  },

  paymentWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },

  paymentIcon: {
    marginRight: 10,
  },

  paymentInfo: {
    fontSize: 12,
    lineHeight: 12,
    color: '#A5DC86',
  },

  buttonWrapper: {
    position: 'absolute',
    bottom: 90,
    width: '100%',
    padding: 20,
  },
});

export default styles;
