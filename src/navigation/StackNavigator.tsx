import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigator from '../navigation/DrawerNavigator';
import ProductDetails from '../screens/ProductDetails/ProductDetails';
import Profile from '../screens/Profile/Profile';
import WishList from '../screens/WishList/WishList';
import Cart from '../screens/Cart/Cart';
import Orders from '../screens/Orders/Orders';
import CartButton from '../components/TopBar/CartButton';
import WishListButton from '../components/TopBar/WishListButton';
import SelectColor from '../components/Modal/SelectColor';
import ProductAddedToCart from '../components/Modal/ProductAddedToCart';
import {MODAL_ROUTES, STACK_ROUTES} from '../constants/routes';
import {BLUE, FONT_FAMILY} from '../constants';

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
    <Stack.Group>
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
      <Stack.Screen
        name={STACK_ROUTES.PROFILE}
        component={Profile}
        options={{
          title: 'My Profile',
          headerRight: () => <CartButton />,
        }}
      />
      <Stack.Screen
        name={STACK_ROUTES.WISH_LIST}
        component={WishList}
        options={{
          title: 'My Wish List',
          headerRight: () => <CartButton />,
        }}
      />
      <Stack.Screen
        name={STACK_ROUTES.CART}
        component={Cart}
        options={{
          title: 'My Cart',
          headerRight: () => <CartButton />,
        }}
      />
      <Stack.Screen
        name={STACK_ROUTES.ORDERS}
        component={Orders}
        options={{
          title: 'My Orders',
          headerRight: () => <CartButton />,
        }}
      />
    </Stack.Group>

    <Stack.Group screenOptions={{presentation: 'modal'}}>
      <Stack.Screen
        name={MODAL_ROUTES.SELECT_COLOR}
        component={SelectColor}
        options={{title: 'Select Color'}}
      />
      <Stack.Screen
        name={MODAL_ROUTES.PRODUCT_ADDED_TO_CART}
        component={ProductAddedToCart}
        options={{title: 'Product Added To Cart'}}
      />
    </Stack.Group>
  </Stack.Navigator>
);

export default StackNavigator;
