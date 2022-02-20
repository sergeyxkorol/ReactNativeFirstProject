import React, {FC, useCallback, useEffect, useState} from 'react';
import {Pressable, useWindowDimensions, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import NetInfo from '@react-native-community/netinfo';
import Catalog from '../../components/Catalog/Catalog';
import {Item} from '../../components/Catalog/types/CatalogItem.type';
import {loadData} from '../../helpers/loadData';
import {API_URL, GREY} from '../../constants';
import commonStyles from '../../commonStyles';
import Loader from '../../components/Loader';
import OfflineModal from '../../components/OfflineModal';
import {useNavigation} from '@react-navigation/native';
import {STACK_ROUTES} from '../../constants/routes';
import styles from './styles';

import SearchIcon from '../../assets/icons/search.svg';

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

  const navigation = useNavigation();

  const onPressSearch = () => {
    navigation.navigate(STACK_ROUTES.SEARCH);
  };

  const {height} = useWindowDimensions();

  return (
    <View testID="mainScreen">
      {isLoading ? (
        <Loader />
      ) : (
        <SafeAreaView style={{...commonStyles.safeArea, height}}>
          <View style={styles.search}>
            <Pressable style={styles.searchWrapper} onPress={onPressSearch}>
              <SearchIcon fill={GREY} />
            </Pressable>
          </View>
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
    </View>
  );
};

export default MainScreen;
