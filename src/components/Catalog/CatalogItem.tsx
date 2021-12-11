import React, {FC} from 'react';
import {View, Pressable, Image, StyleSheet} from 'react-native';
import MainInfo from './MainInfo';
import {Item} from './types/CatalogItem.type';

type Props = {
  data: Item;
};

const CatalogItem: FC<Props> = ({data}) => {
  return (
    <View style={styles.catalogItem}>
      <Pressable onPress={() => console.log('Catalog item pressed')}>
        <Image height={100} width={100} />

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

const styles = StyleSheet.create({
  catalogItem: {
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    borderRadius: 5,
    backgroundColor: '#fff',
    elevation: 5,
  },
});

export default CatalogItem;
