import React, {FC} from 'react';
import {View} from 'react-native';
import {Item} from './types/CatalogItem.type';
import CatalogItem from './CatalogItem';
import styles from './Catalog.styles';

type Props = {
  itemsList: Item[] | [];
};

const Catalog: FC<Props> = ({itemsList}) => {
  return (
    <View style={styles.catalog}>
      {itemsList.map(item => (
        <View key={item?.id} style={styles.catalogItem}>
          <CatalogItem data={item} />
        </View>
      ))}
    </View>
  );
};

export default Catalog;
