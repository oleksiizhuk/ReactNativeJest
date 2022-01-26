import { StyleSheet } from 'react-native';
import {useTheme} from '@react-navigation/native';

export const InputStyleCreator = () => {
  const colors = useTheme() as any;
  return StyleSheet.create({
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
  })
}
