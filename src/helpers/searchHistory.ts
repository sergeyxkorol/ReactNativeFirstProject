import AsyncStorage from '@react-native-async-storage/async-storage';
import {SEARCH_HISTORY, SEARCH_HISTORY_LIMIT} from '../constants';

export const normalizeSearchHistory = async (text: string) => {
  try {
    const searchHistory = await retreiveSearchHistory();
    const normalizedText = text.trim().toLowerCase();
    const filteredSearchHistory = searchHistory.filter(
      (historyItem: string) => historyItem !== normalizedText,
    );
    const updatedSearchHistory = [normalizedText, ...filteredSearchHistory];

    if (updatedSearchHistory.length > SEARCH_HISTORY_LIMIT) {
      updatedSearchHistory.length = SEARCH_HISTORY_LIMIT;
    }

    return updatedSearchHistory;
  } catch (error) {
    console.error(error);
    return [];
  }
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

export const deleteHistoryItem = async (text: string) => {
  try {
    const searchHistory = await retreiveSearchHistory();

    const updatedSearchHistory = searchHistory.filter(
      (historyItem: string) => historyItem !== text,
    );

    await saveSearchHistory(updatedSearchHistory);

    return updatedSearchHistory;
  } catch (error) {
    console.error(error);

    return [];
  }
};

export const filterSearchHistory = (searchHistory: string[], text: string) => {
  return searchHistory.filter(historyItem => historyItem.includes(text));
};
