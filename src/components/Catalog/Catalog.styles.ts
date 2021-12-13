import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  catalog: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 10,
  },

  catalogItem: {
    flexBasis: '50%',
    marginBottom: 20,
    paddingRight: 20,
  },
});

export default styles;
