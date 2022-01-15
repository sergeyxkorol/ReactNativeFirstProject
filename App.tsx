/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';

const mainTheme = DefaultTheme;
mainTheme.colors.background = 'white';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={mainTheme}>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
