import {StyleSheet} from 'react-native';
import commonStyles from '../../commonStyles';

const styles = StyleSheet.create({
  optionWrapper: {
    flexDirection: 'row',
    marginTop: 10,
  },

  option: {
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#F7F7F7',
  },

  selectedOption: {
    borderWidth: 1,
  },

  optionText: {
    ...commonStyles.text,
    fontSize: 15,
  },
});

export default styles;
