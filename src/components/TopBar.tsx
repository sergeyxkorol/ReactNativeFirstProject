import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {MAIN_BLUE} from '../constants';

const TopBar: FC<{children: React.ReactNode}> = ({children}) => {
  return <View style={styles.topBar}>{children}</View>;
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    paddingLeft: 15,
    paddingRight: 14,
    backgroundColor: MAIN_BLUE,
    elevation: 5,
  },
});

export default TopBar;
