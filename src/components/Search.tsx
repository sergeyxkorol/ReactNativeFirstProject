import React, {FC, useRef} from 'react';
import {View, TextInput, StyleSheet, Pressable} from 'react-native';
import {GREY} from '../constants';

import SearchIcon from '../assets/icons/search.svg';

const Search: FC = () => {
  const searchInput = useRef(null);

  return (
    <View style={styles.search}>
      <Pressable
        style={styles.searchWrapper}
        onPress={() => searchInput?.current?.focus()}>
        <SearchIcon fill={GREY} />
        <TextInput ref={searchInput} style={styles.searchInput} />
      </Pressable>
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
