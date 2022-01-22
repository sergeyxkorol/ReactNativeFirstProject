import React, {FC, useEffect, useRef, useState} from 'react';
import {Animated, LayoutChangeEvent, Pressable, View} from 'react-native';
import {BLUE, DARK_BLUE} from '../../constants';
import Default from './Default';
import Fail from './Fail';
import Loader from './Loader';
import {Status} from './Status.types';
import styles from './styles';
import Success from './Success';

type Props = {
  title: string;
  callback: () => void;
};

const LoadingButton: FC<Props> = ({title, callback}) => {
  const wrapperRef = useRef(null);
  const [wrapperLayout, setWrapperLayout] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const [status, setStatus] = useState<Status>(Status.Default);
  const animationValue = useRef(new Animated.Value(Status.Default)).current;
  const isLoading = status === Status.Loading;

  useEffect(() => {
    Animated.timing(animationValue, {
      toValue: isLoading ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [animationValue, isLoading]);

  const renderElement = () => {
    switch (status) {
      case Status.Default:
        return <Default title={title} />;
      case Status.Loading:
        return <Loader />;
      case Status.Success:
        return <Success />;
      case Status.Fail:
        return <Fail />;
      default:
        break;
    }
  };

  const onPress = async () => {
    if (isLoading) {
      return;
    }

    try {
      setStatus(Status.Loading);
      await callback();
      setStatus(Status.Success);
    } catch (error) {
      setStatus(Status.Fail);
    }
  };

  const onLayout = (event: LayoutChangeEvent) =>
    setWrapperLayout(event.nativeEvent.layout);

  return (
    <View ref={wrapperRef} onLayout={onLayout} style={styles.buttonWrapper}>
      <Animated.View
        style={[
          styles.container,
          {
            width: animationValue.interpolate({
              inputRange: [0, 1],
              outputRange: [wrapperLayout.width, wrapperLayout.height],
            }),
            backgroundColor: animationValue.interpolate({
              inputRange: [0, 1],
              outputRange: [BLUE, DARK_BLUE],
            }),
          },
        ]}>
        <Pressable style={styles.button} onPress={onPress}>
          {renderElement()}
        </Pressable>
      </Animated.View>
    </View>
  );
};

export default LoadingButton;
