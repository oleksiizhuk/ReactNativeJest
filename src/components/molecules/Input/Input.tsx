import React, {FC, memo} from 'react';
import {View, TextInput} from 'react-native';
import { InputStyleCreator } from "./styles";

export default interface InputProps {
  value: string;
  placeholder?: string;
  onChange: (arg: string) => void;
}


export const Input: FC<InputProps> = memo(({onChange, value, placeholder}) => {
  const styles = InputStyleCreator();
  return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={onChange}
          value={value}
          placeholder={placeholder}
        />
      </View>
  );
});

