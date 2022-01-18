import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [
      {
        scale: 1,
      },
    ],
  },

  center: {
    margin: 30,
    width: 50,
    height: 50,
  },

  particle: {
    position: 'absolute',
    height: 10,
    width: 10,
    borderRadius: 5,
  },
});

export default styles;
