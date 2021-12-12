import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {BLUE} from '../constants';

const TopBar: FC<{children: React.ReactNode}> = ({children}) => {
  return <View style={styles.topBar}>{children}</View>;
};

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

export default TopBar;
