import AsyncStorage from '@react-native-async-storage/async-storage';
import {OAUTH_URL, USER_TOKEN} from '../constants';

export const retreiveToken = async () => {
  try {
    const tokenData = await AsyncStorage.getItem(USER_TOKEN);

    if (!tokenData) {
      return null;
    }

    const parsedTokenData = JSON.parse(tokenData);
    const {access_token, refresh_token, created_at, expires_in} =
      parsedTokenData;

    if (Date.now() > created_at + expires_in) {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          grant_type: 'refresh_token',
          refresh_token,
        }),
      };
      const response = await fetch(OAUTH_URL, options);
      const parsedResponse = await response.json();

      if (parsedResponse.error) {
        return access_token;
      }

      await AsyncStorage.setItem(USER_TOKEN, JSON.stringify(parsedResponse));

      return parsedResponse.access_token;
    }
  } catch (error) {
    console.error(error);
  }
};
