import React, {FC} from 'react';
import {Pressable, Text} from 'react-native';
import {RED} from '../../constants';
import styles from './styles';

import CancelIcon from '../../assets/icons/cancel.svg';

type Props = {
  title: string;
  onPress: (title: string) => void;
  onPressDelete: (title: string) => void;
};

const SearchHistoryItem: FC<Props> = ({title, onPress, onPressDelete}) => {
  return (
    <Pressable
      onPress={() => {
        onPress(title);
      }}
      style={styles.historyItem}>
      <Text style={styles.historyItemTitle}>{title}</Text>

      <Pressable
        onPress={() => onPressDelete(title)}
        style={styles.historyItemDelete}>
        <CancelIcon fill={RED} />
      </Pressable>
    </Pressable>
  );
};

export default SearchHistoryItem;
