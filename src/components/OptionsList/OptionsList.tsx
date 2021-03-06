import React, {FC} from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './styles';

type Option = {
  id: string;
  name: string;
};

type Props = {
  options: Option[];
  selectedOptionId: string | null;
  onPressHandler: Function;
};

const OptionsList: FC<Props> = ({
  options,
  selectedOptionId,
  onPressHandler,
}) => (
  <View style={styles.optionWrapper} testID="optionsList">
    {options.map(({id, name}) => (
      <Pressable
        key={id}
        style={[
          styles.option,
          id === selectedOptionId ? styles.selectedOption : null,
        ]}
        onPress={() => onPressHandler(id)}
        testID={`option${id}`}>
        <Text style={styles.optionText}>{name}</Text>
      </Pressable>
    ))}
  </View>
);

export default OptionsList;
