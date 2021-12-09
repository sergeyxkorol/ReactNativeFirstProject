import React, {FC} from 'react';
import {ScrollView, View, Text, Pressable, StyleSheet} from 'react-native';
import Search from '../components/Search';

import MenuHamburgerIcon from '../assets/icons/menu-hamburger.svg';
import CartIcon from '../assets/icons/cart.svg';

const HomeScreen: FC = () => {
  return (
    <>
      <View style={styles.topBar}>
        <Pressable
          style={styles.topBarButton}
          onPress={() => console.log('Menu button pressed')}>
          <MenuHamburgerIcon fill="white" />
        </Pressable>

        <View style={styles.topBarTextWrapper}>
          <Text style={styles.topBarText}>Ecommerce Store</Text>
        </View>

        <Pressable
          style={styles.topBarButton}
          onPress={() => console.log('Cart button pressed')}>
          <CartIcon fill="white" />
        </Pressable>
      </View>

      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Search />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 9,
    paddingLeft: 15,
    paddingRight: 14,
    backgroundColor: '#008ACE',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  topBarText: {
    fontFamily: 'Roboto',
    fontSize: 20,
    color: '#fff',
  },

  topBarTextWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  topBarButton: {
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
