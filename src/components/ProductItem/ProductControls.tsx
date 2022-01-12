import React, {FC, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {LIGHT_GREY} from '../../constants';
import styles from './ProductControls.styles';

import CirclePlusIcon from '../../assets/buttons/circle-plus.svg';
import CircleMinusIcon from '../../assets/buttons/circle-minus.svg';
import TrashIcon from '../../assets/icons/trash.svg';

type Props = {
  productId: string;
  productCount?: number;
  onChangeCount?: (id: string, updatedCount: number) => void;
  onDelete?: (id: string) => void;
};

const Controls: FC<Props> = ({
  productId = '',
  productCount = 0,
  onChangeCount,
  onDelete,
}) => {
  const [count, setCount] = useState(productCount);

  const onPlusPress = () => {
    const updatedCount = count + 1;
    setCount(updatedCount);

    onChangeCount?.(productId, updatedCount);
  };

  const onMinusPress = () => {
    const updatedCount = count - 1;

    if (updatedCount > 0) {
      setCount(count - 1);
      onChangeCount?.(productId, updatedCount);
    }
  };

  const onDeletePress = () => {
    onDelete?.(productId);
  };

  return (
    <View style={styles.controls}>
      <View style={styles.countWrapper}>
        {onChangeCount && (
          <>
            <Pressable onPress={onPlusPress}>
              <CirclePlusIcon />
            </Pressable>
            <Text style={styles.countText}>{count}</Text>
            <Pressable onPress={onMinusPress}>
              <CircleMinusIcon />
            </Pressable>
          </>
        )}
      </View>
      {onDelete && (
        <View style={styles.deleteWrapper}>
          <Pressable onPress={onDeletePress}>
            <TrashIcon fill={LIGHT_GREY} />
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default Controls;
