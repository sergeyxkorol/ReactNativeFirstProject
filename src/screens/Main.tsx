import React, {FC, useCallback, useEffect, useState} from 'react';
import {ScrollView, Pressable, StyleSheet, RefreshControl} from 'react-native';
import TopBar from '../components/TopBar';
import TopBarText from '../components/TopBarText';
import Search from '../components/Search';
import Catalog from '../components/Catalog/Catalog';
import {Item} from '../components/Catalog/types/CatalogItem.type';
import {loadData} from '../helpers/loadData';
import {API_URL} from '../constants';

import MenuHamburgerIcon from '../assets/icons/menu-hamburger.svg';
import CartIcon from '../assets/icons/cart.svg';

type ItemsList = Item[];

const MainScreen: FC = () => {
  const [itemsList, setItemsList] = useState<ItemsList>([]);
  const [refreshing, setRefreshing] = useState(false);

  const loadDataCallback = useCallback(() => {
    return loadData(`${API_URL}/products`);
  }, []);

  useEffect(() => {
    loadDataCallback().then(parsedResponse => {
      setItemsList(parsedResponse.data);
    });
  }, [loadDataCallback]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    loadDataCallback()
      .then(parsedResponse => {
        setItemsList(parsedResponse.data);
      })
      .finally(() => {
        setRefreshing(false);
      });
  }, [loadDataCallback]);

  return (
    <>
      <TopBar>
        <Pressable
          style={styles.topBarButton}
          onPress={() => console.log('Menu button pressed')}>
          <MenuHamburgerIcon fill="white" />
        </Pressable>

        <TopBarText>Ecommerce Store</TopBarText>

        <Pressable
          style={styles.topBarButton}
          onPress={() => console.log('Cart button pressed')}>
          <CartIcon fill="white" />
        </Pressable>
      </TopBar>

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Search />

        <Catalog itemsList={itemsList} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  topBarButton: {
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainScreen;
