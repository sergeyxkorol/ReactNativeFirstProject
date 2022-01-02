import React, {FC, useCallback, useEffect, useState} from 'react';
import {useWindowDimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Search from '../../components/Search/Search';
import Catalog from '../../components/Catalog/Catalog';
import {Item} from '../../components/Catalog/types/CatalogItem.type';
import {loadData} from '../../helpers/loadData';
import {API_URL} from '../../constants';
import styles from '../../commonStyles';

type ItemsList = Item[];

const MainScreen: FC = () => {
  const [itemsList, setItemsList] = useState<ItemsList>([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadData(`${API_URL}/products`).then(parsedResponse => {
      setItemsList(parsedResponse.data);
    });
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    loadData(`${API_URL}/products`)
      .then(parsedResponse => {
        setItemsList(parsedResponse.data);
      })
      .finally(() => {
        setRefreshing(false);
      });
  }, []);

  const {height} = useWindowDimensions();

  return (
    <SafeAreaView style={{...styles.safeArea, height}}>
      <Search />

      <Catalog
        itemsList={itemsList}
        onRefreshHandler={onRefresh}
        refreshing={refreshing}
      />
    </SafeAreaView>
  );
};

export default MainScreen;
