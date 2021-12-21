import React, {FC} from 'react';
import {View} from 'react-native';
import styles from './TopBar.styles';

const TopBar: FC<{children: React.ReactNode}> = ({children}) => (
  <View style={styles.topBar}>{children}</View>
);

export default TopBar;
