import React, {FC, useCallback, useEffect, useState} from 'react';
import {useWindowDimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Search from '../../components/Search/Search';
import Catalog from '../../components/Catalog/Catalog';
import {Item} from '../../components/Catalog/types/CatalogItem.type';
import {loadData} from '../../helpers/loadData';
import {API_URL} from '../../constants';
import styles from '../../commonStyles';
import Loader from '../../components/Loader';

type ItemsList = Item[];

const MainScreen: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [itemsList, setItemsList] = useState<ItemsList>([]);
  const [refreshing, setRefreshing] = useState(false);

  const retreiveProducts = useCallback(async () => {
    try {
      const parsedResponse = await loadData(`${API_URL}/products`);

      setItemsList(parsedResponse.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    async function bootstrapAsync() {
      setIsLoading(true);
      await retreiveProducts();
      setIsLoading(false);
    }

    bootstrapAsync();
  }, [retreiveProducts]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await retreiveProducts();
    setRefreshing(false);
  }, [retreiveProducts]);

  const {height} = useWindowDimensions();

  return isLoading ? (
    <Loader />
  ) : (
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
