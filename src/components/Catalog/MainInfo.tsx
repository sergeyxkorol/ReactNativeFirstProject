import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BLUE_TEXT, FONT_FAMILY, GREY, MAIN_TEXT} from '../../constants';
import CommonStyles from '../../commonStyles';

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
    fontFamily: FONT_FAMILY,
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
    ...CommonStyles.productInfoText,
    paddingRight: 10,
    color: MAIN_TEXT,
  },

  oldPrice: {
    ...CommonStyles.productInfoText,
    paddingRight: 10,
    textDecorationLine: 'line-through',
    color: GREY,
  },

  discount: {
    ...CommonStyles.productInfoText,
    color: BLUE_TEXT,
  },
});

export default MainInfo;
