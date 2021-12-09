import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';

type Props = {
  data: {
    id?: string;
  };
};

const CatalogItem: FC<Props> = ({data}) => <View style={styles.catalogItem} />;

const styles = StyleSheet.create({
  catalogItem: {},
});

export default CatalogItem;
