import React, {FC} from 'react';
import {View, Text} from 'react-native';
import styles from './MainInfo.styles';

type Props = {
  data: {
    name?: string;
    display_price?: string;
  };
};

const MainInfo: FC<Props> = ({data}) => {
  return (
    <>
      <Text style={styles.name}>{data?.name}</Text>
      <View style={styles.priceWrapper}>
        <Text style={styles.price}>{data?.display_price}</Text>
        <Text style={styles.oldPrice}>{data?.display_price}</Text>
        <Text style={styles.discount}>{data?.display_price} Off</Text>
      </View>
    </>
  );
};

export default MainInfo;
