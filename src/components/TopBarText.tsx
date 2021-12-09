import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TopBarText: FC<{children: React.ReactText}> = ({children}) => {
  return (
    <View style={styles.topBarTextWrapper}>
      <Text style={styles.topBarText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topBarText: {
    fontFamily: 'Roboto',
    fontSize: 20,
    color: '#fff',
  },

  topBarTextWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TopBarText;
