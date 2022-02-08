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
  const handlePress = () => {
    onPress(title);
  };

  const handlePressDelete = () => {
    onPressDelete(title);
  };

  return (
    <Pressable onPress={handlePress} style={styles.historyItem}>
      <Text style={styles.historyItemTitle}>{title}</Text>

      <Pressable onPress={handlePressDelete} style={styles.historyItemDelete}>
        <CancelIcon fill={RED} />
      </Pressable>
    </Pressable>
  );
};

export default SearchHistoryItem;
