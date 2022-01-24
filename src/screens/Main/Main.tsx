import React, {FC, useCallback, useEffect, useState} from 'react';
import {useWindowDimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import NetInfo from '@react-native-community/netinfo';
import Search from '../../components/Search/Search';
import Catalog from '../../components/Catalog/Catalog';
import {Item} from '../../components/Catalog/types/CatalogItem.type';
import {loadData} from '../../helpers/loadData';
import {API_URL} from '../../constants';
import styles from '../../commonStyles';
import Loader from '../../components/Loader';
import OfflineModal from '../../components/OfflineModal';

type ItemsList = Item[];

const MainScreen: FC = () => {
  const [isOffline, setIsOffline] = useState(false);
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
    const removeNetInfoSubscription = NetInfo.addEventListener(state => {
      const offline = !(state.isConnected && state.isInternetReachable);

      setIsOffline(offline);
    });

    async function bootstrapAsync() {
      setIsLoading(true);
      await retreiveProducts();
      setIsLoading(false);
    }

    bootstrapAsync();

    return () => removeNetInfoSubscription();
  }, [retreiveProducts]);

  const onRefresh = useCallback(async () => {
    setIsOffline(false);

    const netState = await NetInfo.fetch();
    const {isConnected} = netState;
    setIsOffline(!isConnected);

    if (!isConnected) {
      return;
    }

    setRefreshing(true);
    await retreiveProducts();
    setRefreshing(false);
  }, [retreiveProducts]);

  const onCloseModal = useCallback(() => {
    setIsOffline(false);
  }, []);

  const {height} = useWindowDimensions();

  return (
    <>
      {isLoading ? (
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
      )}

      <OfflineModal
        isVisible={isOffline}
        onClose={onCloseModal}
        onRetry={onRefresh}
      />
    </>
  );
};

export default MainScreen;
