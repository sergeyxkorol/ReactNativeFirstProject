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
import React, {useRef} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Analytics from 'appcenter-analytics';
import {
  DefaultTheme,
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';

const mainTheme = DefaultTheme;
mainTheme.colors.background = 'white';

const App = () => {
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef();

  return (
    <SafeAreaProvider>
      <NavigationContainer
        theme={mainTheme}
        ref={navigationRef}
        onReady={() => {
          routeNameRef.current = navigationRef.getCurrentRoute().name;
        }}
        onStateChange={async () => {
          const previousRouteName = routeNameRef.current;
          const currentRouteName = navigationRef.getCurrentRoute().name;

          if (previousRouteName !== currentRouteName) {
            Analytics.trackEvent('onScreenOpen', {
              routeName: currentRouteName,
            });
          }

          // Save the current route name for later comparison
          routeNameRef.current = currentRouteName;
        }}>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
