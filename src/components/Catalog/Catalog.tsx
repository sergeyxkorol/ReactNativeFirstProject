import React, {FC} from 'react';
import {FlatList, View} from 'react-native';
import {Item} from './types/CatalogItem.type';
import CatalogItem from './CatalogItem';
import styles from './Catalog.styles';

type Props = {
  itemsList: Item[];
  onRefreshHandler: () => void;
  refreshing: boolean;
};

const Catalog: FC<Props> = ({itemsList, onRefreshHandler, refreshing}) => {
  const renderItem = ({item}: {item: Item}) => (
    <View style={styles.catalogItem}>
      <CatalogItem data={item} />
    </View>
  );

  return (
    <View style={styles.catalog}>
      <FlatList
        data={itemsList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={false}
        numColumns={2}
        onRefresh={onRefreshHandler}
        refreshing={refreshing}
      />
    </View>
  );
};

export default Catalog;
