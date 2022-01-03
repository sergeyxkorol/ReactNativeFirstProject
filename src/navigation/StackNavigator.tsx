import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigator from '../navigation/DrawerNavigator';
import ProductDetails from '../screens/ProductDetails/ProductDetails';
import {BLUE, FONT_FAMILY} from '../constants';
import CartButton from '../components/TopBar/CartButton';
import WishListButton from '../components/TopBar/WishListButton';
import {STACK_ROUTES} from '../constants/routes';

const Stack = createNativeStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator
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
    }}>
    <Stack.Screen
      name={STACK_ROUTES.MAIN}
      component={DrawerNavigator}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name={STACK_ROUTES.PRODUCT}
      component={ProductDetails}
      options={{
        title: '',
        headerRight: () => (
          <>
            <WishListButton />
            <CartButton />
          </>
        ),
      }}
    />
  </Stack.Navigator>
);

export default StackNavigator;
