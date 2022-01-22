import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import {Animated, View} from 'react-native';
import {Svg, Path} from 'react-native-svg';

type Props = {
  d: string;
  color: string;
  width: number;
  delay?: number;
  duration?: number;
};

const AnimatedPath = Animated.createAnimatedComponent(Path);

const AnimatedSvg: FC<Props> = ({
  d,
  color,
  width,
  delay = 0,
  duration = 1000,
}) => {
  const pathRef = useRef<typeof AnimatedPath>(null);
  const [length, setLength] = useState(0);
  const onLayout = useCallback(() => {
    const strokeLength = pathRef.current.getTotalLength();
    setLength(strokeLength);
  }, []);

  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      delay,
      duration,
      useNativeDriver: false,
    }).start();
  }, [animation, delay, duration]);

  return (
    <View>
      <Svg width="17" height="13" viewBox="0 0 17 13">
        <AnimatedPath
          onLayout={onLayout}
          ref={pathRef}
          d={d}
          stroke={color}
          strokeWidth={width}
          strokeDasharray={length}
          strokeDashoffset={animation.interpolate({
            inputRange: [0, 1],
            outputRange: [length, 0],
          })}
        />
      </Svg>
    </View>
  );
};

export default AnimatedSvg;
