import React, {FC, useEffect, useState} from 'react';
import {ScrollView, Pressable, StyleSheet} from 'react-native';
import TopBar from '../components/TopBar';
import TopBarText from '../components/TopBarText';
import Search from '../components/Search';
import Catalog from '../components/Catalog/Catalog';
import {Item} from '../components/Catalog/types/CatalogItem.type';
import {API_URL} from '../constants';

import MenuHamburgerIcon from '../assets/icons/menu-hamburger.svg';
import CartIcon from '../assets/icons/cart.svg';

type ItemsList = Item[];

const useLoadItemsList = () => {
  const [itemsList, setItemsList] = useState<ItemsList>([]);

  useEffect(() => {
    fetch(API_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .then(parsedResponse => {
        setItemsList(parsedResponse.data);
      })
      .catch(error => {
        // ToDo: show error to the user
        console.error(error);
      });
  }, []);

  return {itemsList};
};

const MainScreen: FC = () => {
  const {itemsList} = useLoadItemsList();

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

      <ScrollView contentInsetAdjustmentBehavior="automatic">
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
