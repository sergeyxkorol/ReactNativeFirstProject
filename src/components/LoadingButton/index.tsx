import React, {FC, useEffect, useRef, useState} from 'react';
import {Animated, Pressable} from 'react-native';
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
  const [status, setStatus] = useState<Status>(Status.Default);
  const loadingValue = useRef(new Animated.Value(Status.Default)).current;
  const colorValue = useRef(new Animated.Value(Status.Default)).current;
  const isLoading = status === Status.Loading;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(loadingValue, {
        toValue: isLoading ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(colorValue, {
        toValue: isLoading ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
  }, [colorValue, isLoading, loadingValue]);

  const renderElement = () => {
    console.log(38, status);

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

  return (
    <Animated.View
      style={{
        width: loadingValue.interpolate({
          inputRange: [0, 1],
          outputRange: [200, 40],
        }),
        backgroundColor: colorValue.interpolate({
          inputRange: [0, 1],
          outputRange: [BLUE, DARK_BLUE],
        }),
      }}>
      <Pressable style={styles.button} onPress={onPress}>
        {renderElement()}
      </Pressable>
    </Animated.View>
  );
};

export default LoadingButton;
