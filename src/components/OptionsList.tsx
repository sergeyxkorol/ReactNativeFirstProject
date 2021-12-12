import React, {FC} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import commonStyles from '../commonStyles';

type Option = {
  id: string;
  name: string;
};

const OptionsList: FC<{
  options: Option[];
  selectedOptionId: string | null;
  onPressHandler: Function;
}> = ({options, selectedOptionId, onPressHandler}) => {
  return (
    <View style={styles.optionWrapper}>
      {options.map(({id, name}) => (
        <Pressable
          key={id}
          style={[
            styles.option,
            id === selectedOptionId ? styles.selectedOption : null,
          ]}
          onPress={() => onPressHandler(id)}>
          <Text style={styles.optionText}>{name}</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  optionWrapper: {
    flexDirection: 'row',
    marginTop: 10,
  },

  option: {
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#F7F7F7',
  },

  selectedOption: {
    borderWidth: 1,
  },

  optionText: {
    ...commonStyles.text,
    fontSize: 15,
  },
});

export default OptionsList;
