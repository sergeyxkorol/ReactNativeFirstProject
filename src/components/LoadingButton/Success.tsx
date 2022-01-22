import React, {FC, useEffect, useRef} from 'react';
import {Animated, Text, View} from 'react-native';
import {GREEN, WHITE} from '../../constants';
import AnimatedSvg from '../AnimatedSvg';
import styles from './styles';

const stroke =
  'M5.40909 10.2836L1.35227 6.20896L0 7.56716L5.40909 13L17 1.35821L15.6477 0L5.40909 10.2836Z';

type Props = {};

const Success: FC<Props> = () => {
  const animationValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [animationValue]);

  return (
    <Animated.View
      style={[
        styles.status,
        {
          opacity: animationValue,
          backgroundColor: animationValue.interpolate({
            inputRange: [0, 1],
            outputRange: [WHITE, GREEN],
          }),
        },
      ]}>
      <Text style={[styles.text]}>Success</Text>
      <View style={[styles.statusIcon, styles.statusIconSuccess]}>
        <AnimatedSvg d={stroke} color={WHITE} width={3} delay={500} />
      </View>
    </Animated.View>
  );
};

export default Success;
