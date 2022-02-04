import {StyleSheet} from 'react-native';
import commonStyles from '../../commonStyles';

const styles = StyleSheet.create({
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  historyItemTitle: {
    ...commonStyles.text,
    padding: 10,
  },

  historyItemDelete: {
    padding: 10,
  },
});

export default styles;
