import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';

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
    backgroundColor: '#008ACE',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default TopBar;
