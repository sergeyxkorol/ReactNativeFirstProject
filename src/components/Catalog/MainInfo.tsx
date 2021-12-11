import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BLUE_TEXT, GRAYED_TEXT, MAIN_TEXT} from '../../constants';

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

const styles = StyleSheet.create({
  name: {
    fontFamily: 'Roboto',
    fontSize: 15,
    lineHeight: 20,
    color: MAIN_TEXT,
  },

  priceWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },

  price: {
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: '700',
    color: MAIN_TEXT,
  },

  oldPrice: {
    paddingLeft: 10,
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: '700',
    textDecorationLine: 'line-through',
    color: GRAYED_TEXT,
  },

  discount: {
    paddingRight: 10,
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: '700',
    color: BLUE_TEXT,
  },
});

export default MainInfo;
