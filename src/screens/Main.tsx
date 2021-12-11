import React, {FC, useEffect, useState} from 'react';
import {ScrollView, Pressable, StyleSheet} from 'react-native';
import TopBar from '../components/TopBar';
import TopBarText from '../components/TopBarText';
import Search from '../components/Search';
import Catalog from '../components/Catalog/Catalog';

import MenuHamburgerIcon from '../assets/icons/menu-hamburger.svg';
import CartIcon from '../assets/icons/cart.svg';

type ItemsList = {
  id?: string;
  attributes?: {
    name?: string;
    display_price?: string;
  };
}[];

const MainScreen: FC = () => {
  const [itemsList, setItemsList] = useState<ItemsList>([]);

  useEffect(() => {
    // ToDo: Make request and store data
    setItemsList([
      {
        id: 'testId1',
        attributes: {
          name: 'First item',
          display_price: '$60',
        },
      },
      {
        id: 'testId2',
        attributes: {
          name: 'Second item',
          display_price: '$65',
        },
      },
      {
        id: 'testId3',
        attributes: {
          name: 'Third item',
          display_price: '$42',
        },
      },
    ]);
  }, []);

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
