import {ReactNode} from 'react';
import {ViewStyle} from 'react-native';

export default interface ILayout {
  children: ReactNode;
  style?: ViewStyle;
  scrollStyle?: ViewStyle;
  styleContainer?: ViewStyle;
  contentContainerStyle?: ViewStyle;
  bottomSafeArea?: boolean;
  withoutSidesPadding?: boolean;
  topSafeArea?: boolean;
  withScroll?: boolean;
  keyboardShouldPersistTaps?: boolean;
  onScroll?: () => void;
}
