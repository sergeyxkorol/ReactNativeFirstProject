import React, {FC} from 'react';
import {View, Pressable, Image} from 'react-native';
import {Item} from './types/CatalogItem.type';
import MainInfo from './MainInfo';
import styles from './CatalogItem.styles';
import {useNavigation} from '@react-navigation/native';

type Props = {
  data: Item;
};

const CatalogItem: FC<Props> = ({data}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.catalogItem}>
      <Pressable
        onPress={() =>
          navigation.navigate('ProductDetails', {
            productId: data?.id,
          })
        }>
        <View style={styles.imageWrapper}>
          {/* ToDo: change the hardcoded image */}
          <Image
            source={require('../../assets/product.png')}
            style={styles.image}
          />
        </View>

        <MainInfo
          data={{
            name: data?.attributes?.name,
            display_price: data?.attributes?.display_price,
          }}
        />
      </Pressable>
    </View>
  );
};

export default CatalogItem;
