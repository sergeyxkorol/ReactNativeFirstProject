import React, {FC} from 'react';
import {View, Pressable, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Item} from './types/CatalogItem.type';
import ProductInfo from '../ProductInfo';
import styles from './CatalogItem.styles';
import {STACK_ROUTES} from '../../constants/routes';

type Props = {
  data: Item;
};

const CatalogItem: FC<Props> = ({data}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.catalogItem}>
      <Pressable
        onPress={() =>
          navigation.navigate(STACK_ROUTES.PRODUCT, {
            productId: data.id,
          })
        }>
        <View style={styles.imageWrapper}>
          {/* ToDo: change the hardcoded image */}
          <Image
            source={require('../../assets/product.png')}
            style={styles.image}
          />
        </View>

        <ProductInfo
          data={{
            name: data.attributes?.name,
            display_price: data.attributes?.display_price,
          }}
        />
      </Pressable>
    </View>
  );
};

export default CatalogItem;
