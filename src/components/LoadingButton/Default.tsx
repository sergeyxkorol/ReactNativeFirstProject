import React, {FC, useEffect, useRef} from 'react';
import {Animated} from 'react-native';
import styles from './styles';

type Props = {
  title: string;
};

const Loader: FC<Props> = ({title}) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [opacity]);

  return (
    <Animated.Text
      style={[
        styles.text,
        {
          opacity,
        },
      ]}>
      {title}
    </Animated.Text>
  );
};

export default Loader;
