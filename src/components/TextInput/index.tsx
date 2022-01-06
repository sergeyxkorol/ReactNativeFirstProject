import React, {FC, useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import TextInputProps from './TextInputProps';
import styles from './styles';

const CustoTextInput: FC<TextInputProps> = ({
  label,
  onChange,
  secureTextEntry = false,
}) => {
  const [value, setValue] = useState('');

  function handleTextChange(text: string) {
    setValue(text);
    onChange(text);
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder="Text"
        value={value}
        onChangeText={handleTextChange}
        secureTextEntry={secureTextEntry}
        style={styles.input}
      />
    </View>
  );
};

export default CustoTextInput;
