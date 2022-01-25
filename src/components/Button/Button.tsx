import React, {FC, memo} from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import IButtonProps from './interface/interface';
import {useTheme} from '@react-navigation/native';

const Button: FC<IButtonProps> = ({text, onPress, disabled}) => {
  const {colors} = useTheme() as any;
  const styles = StyleSheet.create({
    button: {
      width: '100%',
      height: 48,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 16,
      backgroundColor: colors.primary,
      borderColor: 'transparent',
      borderWidth: 0,
    },
    pressed: {
      opacity: 0.6,
    },
    disabled: {},
    text: {
      color: colors.whiteColor,
      fontSize: 17,
      lineHeight: 23,
    },
  });
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.button,
        pressed && styles.pressed,
        disabled && styles.disabled,
      ]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default memo(Button);
