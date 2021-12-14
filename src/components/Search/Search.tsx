import React, {FC, useRef} from 'react';
import {View, TextInput, Pressable} from 'react-native';
import {GREY} from '../../constants';
import styles from './styles';

import SearchIcon from '../../assets/icons/search.svg';

const Search: FC = () => {
  const searchInput = useRef(null);

  return (
    <View style={styles.search}>
      <Pressable
        style={styles.searchWrapper}
        onPress={() => searchInput.current?.focus()}>
        <SearchIcon fill={GREY} />
        <TextInput ref={searchInput} style={styles.searchInput} />
      </Pressable>
    </View>
  );
};

export default Search;
