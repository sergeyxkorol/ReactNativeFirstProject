import React, {FC} from 'react';
import {Pressable} from 'react-native';
import styles from '../../commonStyles';

import HeartEmptyIcon from '../../assets/icons/heart-empty.svg';

const WishListButton: FC = () => (
  <Pressable
    onPress={() => console.log('Wish List button pressed')}
    style={styles.topBarButton}>
    <HeartEmptyIcon fill="white" />
  </Pressable>
);

export default WishListButton;
