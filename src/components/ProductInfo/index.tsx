import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {View, Text, Pressable} from 'react-native';
import {STACK_ROUTES} from '../../constants/routes';
import styles from './styles';

type Props = {
  data: {
    name?: string;
    display_price?: string;
  };
  link?: string;
};

const ProductInfo: FC<Props> = ({data, link}) => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.nameWrapper}>
        {link ? (
          <Pressable
            onPress={() =>
              navigation.navigate(STACK_ROUTES.PRODUCT, {
                productId: link,
              })
            }>
            <Text style={styles.name}>{data.name}</Text>
          </Pressable>
        ) : (
          <Text style={styles.name}>{data.name}</Text>
        )}
      </View>
      <View style={styles.priceWrapper}>
        <Text style={styles.price}>{data.display_price}</Text>
        <Text style={styles.oldPrice}>{data.display_price}</Text>
        <Text style={styles.discount}>{data.display_price} Off</Text>
      </View>
    </>
  );
};

export default ProductInfo;
