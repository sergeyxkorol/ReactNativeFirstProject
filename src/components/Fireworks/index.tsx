import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import {Animated, useWindowDimensions, View} from 'react-native';
import styles from './styles';

type Props = {
  duration?: number;
  explosionsCount?: number;
};

const Fireworks: FC<Props> = ({duration = 500, explosionsCount = 4}) => {
  const [explodes, setExplodes] = useState<{x: number; y: number}[]>([]);
  const [particles, setParticles] = useState<{x: number; y: number}[]>([]);
  const scale = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  // TODO: generate random color
  const explodeColor = 'gold';
  const explosionRadius = 60;

  const {height, width} = useWindowDimensions();

  const generateExplodesPositions = useCallback(() => {
    const positions = [];

    for (let i = 0; i < explosionsCount; i++) {
      positions[i] = {
        x: Math.ceil(
          Math.random() * (width + explosionRadius) - explosionRadius,
        ),
        y: Math.ceil(
          Math.random() * (height + explosionRadius) - explosionRadius,
        ),
      };
    }

    return positions;
  }, [explosionsCount, height, width]);

  const generateParticles = useCallback(() => {
    const particlesCount = 16;
    const radius = 50;
    const particle = 360 / particlesCount;
    const offsetToParentCenter = radius / 2;
    const offsetToChildCenter = 5;
    const totalOffset = offsetToParentCenter - offsetToChildCenter;

    const particlesList = [];
    for (let i = 1; i <= particlesCount; ++i) {
      const particlePosition = particle * i * (Math.PI / 180);
      const y = Math.sin(particlePosition) * radius + totalOffset;
      const x = Math.cos(particlePosition) * radius + totalOffset;

      particlesList.push({x, y});
    }

    return particlesList;
  }, []);

  useEffect(() => {
    setParticles(generateParticles());
    setExplodes(generateExplodesPositions());
  }, [generateParticles, generateExplodesPositions]);

  useEffect(() => {
    const animation = setInterval(() => {
      opacity.setValue(1);

      Animated.parallel([
        Animated.timing(scale, {
          toValue: 1,
          duration,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration,
          useNativeDriver: true,
        }),
      ]).start(() => {
        scale.setValue(0);
        const explodePositions = generateExplodesPositions();
        setExplodes(explodePositions);
      });
    }, 1500);

    return () => clearInterval(animation);
  }, [duration, generateExplodesPositions, opacity, scale]);

  return (
    <>
      {explodes.map(explode => (
        <Animated.View
          style={[
            styles.container,
            {
              top: explode.y,
              left: explode.x,
              opacity: opacity,
              transform: [
                {
                  scale: scale.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 3],
                  }),
                },
              ],
            },
          ]}>
          <View style={styles.center}>
            {particles.map((particle, index) => (
              <View
                key={index + particle.x}
                style={[
                  styles.particle,
                  {
                    top: particle.y,
                    left: particle.x,
                    backgroundColor: explodeColor,
                  },
                ]}
              />
            ))}
          </View>
        </Animated.View>
      ))}
    </>
  );
};

export default Fireworks;
