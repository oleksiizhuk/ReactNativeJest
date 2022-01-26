import React, {memo, FC} from 'react';
import {Text} from 'react-native';


export interface LabelProps {
  label?: string
}

export const Label: FC<LabelProps> = memo(({label}) => {

  return (
    <Text>{label}</Text>
  )
})
