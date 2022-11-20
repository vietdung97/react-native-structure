import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import React, { useMemo } from 'react';
import { AppNavigator } from '@/navigators/AppNavigator';
import { AuthNavigator } from '@/navigators/AuthNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROOT_ROUTES } from '@/constants';
import '@/networking'
export type RootStackParam = {
  [ROOT_ROUTES.APP_NAVIGATION]: undefined;
  [ROOT_ROUTES.AUTH_NAVIGATION]: undefined;
};
const RootStack = createNativeStackNavigator<RootStackParam>();

export function RootNavigator() {
  const user = true;
  const chooseScreen = useMemo(() => {
    return user ? (
      <RootStack.Screen name={ROOT_ROUTES.APP_NAVIGATION} component={AppNavigator} />
    ) : (
      <RootStack.Screen name={ROOT_ROUTES.AUTH_NAVIGATION} component={AuthNavigator} />
    );
  }, [user]);
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {chooseScreen}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export const navigationRef = React.createRef<NavigationContainerRef<any>>();

export function navigate(name: string, params: any) {
  navigationRef.current?.navigate(name, params);
}
