import React, {FC} from 'react';
import {Pressable, Text, GestureResponderEvent} from 'react-native';
import styles from './styles';

type Props = {
  text: string;
  onPressHandler: (event: GestureResponderEvent) => void;
};

const Link: FC<Props> = ({text, onPressHandler}) => (
  <Pressable onPress={onPressHandler} testID="link">
    <Text style={styles.text}>{text}</Text>
  </Pressable>
);

export default Link;
