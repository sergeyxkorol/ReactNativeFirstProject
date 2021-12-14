import React, {FC, useCallback, useEffect, useState} from 'react';
import {Pressable, useWindowDimensions, View} from 'react-native';
import TopBar from '../../components/TopBar/TopBar';
import TopBarText from '../../components/TopBar/TopBarText';
import Search from '../../components/Search/Search';
import Catalog from '../../components/Catalog/Catalog';
import {Item} from '../../components/Catalog/types/CatalogItem.type';
import {loadData} from '../../helpers/loadData';
import {API_URL} from '../../constants';
import styles from './styles';

import MenuHamburgerIcon from '../../assets/icons/menu-hamburger.svg';
import CartIcon from '../../assets/icons/cart.svg';

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
    <View style={{height}}>
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

      <Search />

      <Catalog
        itemsList={itemsList}
        onRefreshHandler={onRefresh}
        refreshing={refreshing}
      />
    </View>
  );
};

export default MainScreen;
