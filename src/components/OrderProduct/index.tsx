import React, {FC} from 'react';
import {Image, Text, View} from 'react-native';
import commonStyles from '../../commonStyles';
import {getImageUri} from '../../helpers/images';
import styles from './styles';

type ProductItemProps = {
  data: {
    id: string;
    attributes: {
      name: string;
    };
  };
};

const ProductItem: FC<ProductItemProps> = ({data}) => (
  <View style={styles.product}>
    <Text style={[commonStyles.text, styles.productTitle]}>
      {data.attributes.name}
    </Text>
    <Image
      source={{
        uri: getImageUri(data.id),
      }}
      style={styles.image}
    />
  </View>
);

export default ProductItem;
