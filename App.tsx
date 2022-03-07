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
import {Alert} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Analytics from 'appcenter-analytics';
import Crashes, {UserConfirmation} from 'appcenter-crashes';
import Config from 'react-native-config';
import {
  DefaultTheme,
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import StorybookUIRoot from './storybook';

const mainTheme = DefaultTheme;
mainTheme.colors.background = 'white';

const App = () => {
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef();
  const getRouteName = () => navigationRef?.getCurrentRoute()?.name;

  return (
    <SafeAreaProvider>
      <NavigationContainer
        theme={mainTheme}
        ref={navigationRef}
        onReady={() => {
          routeNameRef.current = getRouteName();
        }}
        onStateChange={async () => {
          const previousRouteName = routeNameRef.current;
          const currentRouteName = getRouteName();

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

export default Config.RN_LOAD_STORYBOOK === 'true' ? StorybookUIRoot : App;

Crashes.setListener({
  shouldProcess(report) {
    console.log(`Should process report with id: ${report.id}'`);
    return true;
  },

  shouldAwaitUserConfirmation() {
    console.log('Should await user confirmation');
    Alert.alert(
      'One or more crashes were detected, do you want to report them?',
      undefined,
      [
        {
          text: 'Yes, and ask me again if it occurs again.',
          onPress: () => Crashes.notifyUserConfirmation(UserConfirmation.SEND),
        },
        {
          text: 'Yes, always send them',
          onPress: () =>
            Crashes.notifyUserConfirmation(UserConfirmation.ALWAYS_SEND),
        },
        {
          text: "Don't send at this time",
          onPress: () =>
            Crashes.notifyUserConfirmation(UserConfirmation.DONT_SEND),
        },
      ],
    );
    return true;
  },

  onBeforeSending() {
    console.log('Will send crash. onBeforeSending is invoked.');
  },

  onSendingSucceeded() {
    console.log('Did send crash. onSendingSucceeded is invoked.');
  },

  onSendingFailed() {
    console.log('Failed sending crash. onSendingFailed is invoked.');
  },
});
