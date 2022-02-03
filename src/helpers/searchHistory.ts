import AsyncStorage from '@react-native-async-storage/async-storage';
import {SEARCH_HISTORY, SEARCH_HISTORY_LIMIT} from '../constants';

export const normalizeSearchHistory = (
  newItem: string,
  searchHistory: string[] = [],
) => {
  const updatedSearchHistory = [newItem, ...searchHistory];

  if (updatedSearchHistory.length > SEARCH_HISTORY_LIMIT) {
    updatedSearchHistory.length = SEARCH_HISTORY_LIMIT;
  }

  return updatedSearchHistory;
};

export const saveSearchHistory = async (searchHistory: string[] = []) => {
  try {
    await AsyncStorage.setItem(SEARCH_HISTORY, JSON.stringify(searchHistory));
  } catch (error) {
    console.error(error);
  }
};

export const retreiveSearchHistory = async () => {
  try {
    const searchHistory = await AsyncStorage.getItem(SEARCH_HISTORY);

    if (searchHistory) {
      return JSON.parse(searchHistory);
    }

    return [];
  } catch (error) {
    console.error(error);
  }
};
