import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {STACK_ROUTES} from '../../constants/routes';
import {getImageUri} from '../../helpers/images';
import styles from './styles';

export type Product = {
  id: string;
  attributes: {
    name: string;
    quantity: string;
    options_text: string;
    display_total: string;
  };
};

type Props = {
  data: Product;
};

const ProductItem: FC<Props> = ({data}) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate(STACK_ROUTES.PRODUCT, {productId: data.id});
  };

  return (
    <Pressable onPress={onPress}>
      <View key={data.id} style={styles.productItem}>
        <View>
          <Text style={styles.productTitle}>{data.attributes.name}</Text>
          <Text style={styles.productDescription}>
            {data.attributes.options_text}
          </Text>
          <Text style={styles.productDescription}>
            Qty: {data.attributes.quantity}
          </Text>
          <Text style={styles.productTotal}>
            {data.attributes.display_total}
          </Text>
        </View>
        <Image
          source={{
            uri: getImageUri(data.id),
          }}
          style={styles.image}
        />
      </View>
    </Pressable>
  );
};

export default ProductItem;
