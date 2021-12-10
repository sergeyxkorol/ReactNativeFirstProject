import React, {FC} from 'react';
import {ScrollView, Pressable, StyleSheet} from 'react-native';
import TopBar from '../components/TopBar';
import TopBarText from '../components/TopBarText';
import Search from '../components/Search';
import Catalog from '../components/Catalog';

import MenuHamburgerIcon from '../assets/icons/menu-hamburger.svg';
import CartIcon from '../assets/icons/cart.svg';

const MainScreen: FC = () => {
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

        <Catalog itemsList={[{id: 'testId'}]} />
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
