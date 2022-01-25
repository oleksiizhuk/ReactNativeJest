import React, {FC, memo} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import IInputProps from './interface/interface';
import {useTheme} from '@react-navigation/native';

const Input: FC<IInputProps> = ({onChange, value, placeholder}) => {
  const colors = useTheme() as any;
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      borderColor: colors.whiteBorderColor,
      borderWidth: 2,
      paddingHorizontal: 15,
      borderRadius: 16,
      backgroundColor: colors.errorInputBackgroundColor,
      minHeight: 52,
      marginBottom: 16,
    },
    input: {
      padding: 0,
      flex: 1,
      fontSize: 15,
      minHeight: 48,
      color: colors.blackColor,
      fontWeight: '500',
      lineHeight: 20,
      textAlignVertical: 'center',
    },
  });

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={onChange}
          value={value}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
};

export default memo(Input);
