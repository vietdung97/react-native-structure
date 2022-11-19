import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AppNavigator } from '@/navigators/AppNavigator';
import { AuthNavigator } from '@/navigators/AuthNavigator';

export function RootNavigator() {
  const user = false;
  return <NavigationContainer>{user ? <AppNavigator /> : <AuthNavigator />}</NavigationContainer>;
}
