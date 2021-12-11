import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import CatalogItem from './CatalogItem';

type Item = {
  id: string;
  attributes?: {
    name?: string;
    display_price?: string;
  };
};

type Props = {
  itemsList: Item[] | [];
};

const Catalog: FC<Props> = ({itemsList}) => {
  return (
    <View style={styles.catalog}>
      {itemsList.map(item => (
        <View style={styles.catalogItem}>
          <CatalogItem data={item} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  catalog: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 10,
  },

  catalogItem: {
    flexBasis: '50%',
    marginBottom: 20,
    paddingRight: 20,
  },
});

export default Catalog;
