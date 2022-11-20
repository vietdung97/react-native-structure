import { APP_NAVIGATION } from '@/constants/navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import HomeNavigator from './HomeNavigator';

export type TabBottomStackParam = {
  [APP_NAVIGATION.HOME]: undefined;
  [APP_NAVIGATION.SEARCH]: undefined;
  [APP_NAVIGATION.CREATE]: undefined;
  [APP_NAVIGATION.NOTIFICATION]: undefined;
  [APP_NAVIGATION.PROFILE]: undefined;
  [APP_NAVIGATION.COMMENT]: undefined;
  [APP_NAVIGATION.CHAT]: undefined;
  [APP_NAVIGATION.MEDIA]: { uri: string; mimeType: 'video' | 'audio' | 'image' };
};
const Tab = createBottomTabNavigator<TabBottomStackParam>();
// tabBarVisible: false no longer exists on v6 but you can use tabBarStyle: { display: 'none' } instead. I found out here

// https://reactnavigation.org/docs/upgrading-from-5.x/#the-tabbarvisible-option-is-no-longer-present
export function AppNavigator() {
  const { colors } = useTheme();

  return (
    <Tab.Navigator initialRouteName={APP_NAVIGATION.HOME} screenOptions={{ headerShown: false }}>
      <Tab.Screen name={APP_NAVIGATION.HOME} component={HomeNavigator} />
    </Tab.Navigator>
  );
}
