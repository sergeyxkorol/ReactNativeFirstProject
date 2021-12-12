import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FONT_FAMILY} from '../constants';

const TopBarText: FC<{children: React.ReactText}> = ({children}) => {
  return (
    <View style={styles.topBarTextWrapper}>
      <Text style={styles.topBarText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topBarText: {
    fontFamily: FONT_FAMILY,
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
