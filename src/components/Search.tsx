import React, {FC} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {GREY} from '../constants';

import SearchIcon from '../assets/icons/search.svg';

const Search: FC = () => {
  return (
    <View style={styles.search}>
      <View style={styles.searchWrapper}>
        <SearchIcon fill={GREY} />
        <TextInput style={styles.searchInput} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    padding: 20,
    backgroundColor: '#fff',
    elevation: 5,
  },

  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 34,
    paddingLeft: 14,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: GREY,
  },

  searchInput: {
    flex: 1,
    height: 34,
  },
});

export default Search;
