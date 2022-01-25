import React, {FC} from 'react';
import {View, StyleSheet, StatusBar, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTheme} from '@react-navigation/native';
import ILayout from './interfaces/layout.interface';
import ITheme from '../theme/interfaces';

const Layout: FC<ILayout> = ({
  children,
  style,
  bottomSafeArea,
  topSafeArea,
  withScroll,
  onScroll,
  withoutSidesPadding,
  contentContainerStyle,
}) => {
  const {
    colors: {whiteColor},
  } = useTheme() as ITheme;
  const {bottom, top} = useSafeAreaInsets();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: whiteColor,
      ...(bottomSafeArea && {paddingBottom: bottom}),
      ...(topSafeArea && {paddingTop: top}),
    },
    contentContainerStyle: {
      flexGrow: 1,
      paddingHorizontal: withoutSidesPadding ? 0 : 16,
      backgroundColor: whiteColor,
    },
    viewContainer: {
      flexGrow: 1,
    },
    scrollStyle: {
      flexGrow: 1,
    },
  });

  return (
    <View style={[styles.container, style]}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      {withScroll ? (
        <ScrollView
          onScroll={onScroll}
          contentContainerStyle={[styles.contentContainerStyle, contentContainerStyle]}>
          <View style={styles.viewContainer}>{children}</View>
        </ScrollView>
      ) : (
        <View
          style={[
            styles.contentContainerStyle,
            styles.viewContainer,
            contentContainerStyle,
          ]}>
          {children}
        </View>
      )}
    </View>
  );
};

export default Layout;
