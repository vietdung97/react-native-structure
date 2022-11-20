import { HOME_NAVIGATION } from '@/constants/navigation';
import { Home } from '@/screens/Home/Home.screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

export type HomeStackParam = {
  [HOME_NAVIGATION.NEW_FEED]: undefined;
};
const Stack = createNativeStackNavigator<HomeStackParam>();

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={HOME_NAVIGATION.NEW_FEED} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={HOME_NAVIGATION.NEW_FEED} component={Home} />
    </Stack.Navigator>
  );
};
export default React.memo(HomeNavigator);
