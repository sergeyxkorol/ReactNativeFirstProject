import React, {FC} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Main from '../screens/Main/Main';
import ProductDetails from '../screens/ProductDetails/ProductDetails';
import CartButton from '../components/TopBar/CartButton';
import {BLUE, FONT_FAMILY} from '../constants';
import {DRAWER_ROUTES, STACK_ROUTES} from '../constants/routes';
import CustomDrawerContent from '../components/CustomDrawerContent/CustomDrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator: FC = () => {
  return (
    <Drawer.Navigator
      initialRouteName={STACK_ROUTES.MAIN}
      screenOptions={{
        headerStyle: {
          backgroundColor: BLUE,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: FONT_FAMILY,
          fontSize: 20,
        },
      }}
      drawerContent={() => <CustomDrawerContent />}>
      <Drawer.Screen
        name={DRAWER_ROUTES.MAIN}
        component={Main}
        options={{
          title: 'Ecommerse Store',
          headerRight: () => <CartButton />,
        }}
      />
      <Drawer.Screen name={DRAWER_ROUTES.PROFILE} component={ProductDetails} />
      <Drawer.Screen
        name={DRAWER_ROUTES.WISH_LIST}
        component={ProductDetails}
      />
      <Drawer.Screen name={DRAWER_ROUTES.CART} component={ProductDetails} />
      <Drawer.Screen name={DRAWER_ROUTES.ORDERS} component={ProductDetails} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
