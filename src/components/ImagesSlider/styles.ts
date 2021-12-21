import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  sliderWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },

  scrollWrapper: {
    width: '100%',
  },

  slide: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 250,
  },

  dots: {
    flexDirection: 'row',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
  },

  dot: {
    marginRight: 5,
  },
});

export default styles;
