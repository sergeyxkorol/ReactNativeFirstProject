import {StyleSheet} from 'react-native';
import {BLUE} from '../../constants';

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 55,
    paddingLeft: 15,
    paddingRight: 14,
    backgroundColor: BLUE,
    elevation: 5,
  },
});

export default styles;
