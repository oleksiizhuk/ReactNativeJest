import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import SignIn from '../screens/SignIn/SignIn';
import RootStackParamList from './type';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
    },
  });
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea} edges={['left', 'right']}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default AppNavigation;
