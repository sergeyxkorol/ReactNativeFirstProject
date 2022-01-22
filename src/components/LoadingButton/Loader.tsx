import React, {FC, useEffect, useRef} from 'react';
import {Animated, Text} from 'react-native';
import styles from './styles';

const Loader: FC = () => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [opacity]);

  return (
    <Animated.View style={[styles.status, {opacity}]}>
      {/* ToDo: change to bouncing dots animation */}
      <Text style={styles.text}>...</Text>
    </Animated.View>
  );
};

export default Loader;
