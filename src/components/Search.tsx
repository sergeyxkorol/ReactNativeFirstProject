import React, {FC} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

import SearchIcon from '../assets/icons/search.svg';

const Search: FC = () => {
  return (
    <View style={styles.search}>
      <View style={styles.searchWrapper}>
        <SearchIcon fill="#8F8F8F" />
        <TextInput style={styles.searchInput} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    padding: 20,
  },

  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 34,
    paddingLeft: 14,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#8F8F8F',
  },

  searchInput: {
    flex: 1,
    height: 34,
  },
});

export default Search;
