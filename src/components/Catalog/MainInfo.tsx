import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

type Props = {
  data: {
    name: string;
    display_price: string;
  };
};

const MainInfo: FC<Props> = ({data}) => {
  return (
    <>
      <Text style={styles.name}>{data.name}</Text>
      <View style={styles.priceWrapper}>
        <Text style={styles.price}>{data.display_price}</Text>
        <Text style={styles.oldPrice}>{data.display_price}</Text>
        <Text style={styles.discount}>{data.display_price} Off</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  name: {
    fontFamily: 'Roboto',
    fontSize: 15,
    lineHeight: 20,
    color: '#4A4A4A',
  },

  priceWrapper: {
    flexDirection: 'row',
    marginTop: 10,
  },

  price: {
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: '700',
    color: '#4A4A4A',
  },

  oldPrice: {
    paddingLeft: 10,
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: '700',
    textDecorationLine: 'line-through',
    color: '#8F8F8F',
  },

  discount: {
    paddingLeft: 10,
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: '700',
    color: '#00A8F3',
  },
});

export default MainInfo;
