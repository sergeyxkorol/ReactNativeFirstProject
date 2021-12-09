import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import CatalogItem from './CatalogItem';

type Props = {
  itemsList: {
    id?: string;
  }[];
};

const Catalog: FC<Props> = ({itemsList}) => {
  return (
    <View style={styles.catalog}>
      {itemsList &&
        itemsList.map(item => <CatalogItem key={item.id} data={item} />)}
    </View>
  );
};

const styles = StyleSheet.create({
  catalog: {},
});

export default Catalog;
