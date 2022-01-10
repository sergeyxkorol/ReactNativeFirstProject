import React, {FC} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {BLUE} from '../../constants';
import styles from './styles';

const Loader: FC = () => (
  <View style={styles.wrapper}>
    <ActivityIndicator size="large" color={BLUE} />
  </View>
);

export default Loader;
