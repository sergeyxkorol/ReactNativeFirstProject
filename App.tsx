/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './src/screens/Main/Main';
import ProductDetails from './src/screens/ProductDetails/ProductDetails';
import {BLUE, FONT_FAMILY} from './src/constants';
import CartButton from './src/components/TopBar/CartButton';
import WishListButton from './src/components/TopBar/WishListButton';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
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
            name="Home"
            component={Main}
            options={{
              title: 'Ecommerse Store',
              headerRight: () => <CartButton />,
            }}
          />
          <Stack.Screen
            name="ProductDetails"
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
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
