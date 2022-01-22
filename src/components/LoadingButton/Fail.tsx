import React, {FC, useEffect, useRef} from 'react';
import {Animated, Text} from 'react-native';
import {RED, WHITE} from '../../constants';
import AnimatedSvg from '../AnimatedSvg';
import styles from './styles';

const stroke =
  'M15 1.51071L13.4893 0L7.5 5.98929L1.51071 0L0 1.51071L5.98929 7.5L0 13.4893L1.51071 15L7.5 9.01071L13.4893 15L15 13.4893L9.01071 7.5L15 1.51071Z';

type Props = {};

const Fail: FC<Props> = ({}) => {
  const animationValue = useRef(new Animated.Value(0)).current;
  const springValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(animationValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.delay(1000),
      Animated.loop(
        Animated.sequence([
          Animated.timing(springValue, {
            toValue: -1,
            duration: 50,
            useNativeDriver: false,
          }),
          Animated.timing(springValue, {
            toValue: 1,
            duration: 50,
            useNativeDriver: false,
          }),
          Animated.timing(springValue, {
            toValue: 0,
            duration: 50,
            useNativeDriver: false,
          }),
        ]),
        {iterations: 2},
      ),
    ]).start();
  }, [animationValue, springValue]);

  return (
    <Animated.View
      style={[
        styles.status,
        {
          opacity: animationValue,
          backgroundColor: animationValue.interpolate({
            inputRange: [0, 1],
            outputRange: [WHITE, RED],
          }),
        },
      ]}>
      <Text style={styles.text}>Failed</Text>
      <Animated.View
        style={[
          styles.statusIcon,
          styles.statusIconFailed,
          {
            transform: [
              {
                translateX: springValue.interpolate({
                  inputRange: [-1, 0, 1],
                  outputRange: [-5, 0, 5],
                }),
              },
            ],
          },
        ]}>
        <AnimatedSvg d={stroke} color={WHITE} width={1} delay={500} />
      </Animated.View>
    </Animated.View>
  );
};

export default Fail;
