import React, {FC} from 'react';
import {View, Text} from 'react-native';
import styles from './TopBarText.styles';

const TopBarText: FC<{children: React.ReactText}> = ({children}) => {
  return (
    <View style={styles.topBarTextWrapper}>
      <Text style={styles.topBarText}>{children}</Text>
    </View>
  );
};

export default TopBarText;
