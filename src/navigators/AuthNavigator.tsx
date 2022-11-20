import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Login } from '@/screens';
import { AUTH_NAVIGATION } from '@/constants/navigation';

export type AuthStackParam = {
  [AUTH_NAVIGATION.LOGIN]: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParam>();

export function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Login} name={AUTH_NAVIGATION.LOGIN} options={{ header: () => null }} />
    </Stack.Navigator>
  );
}
