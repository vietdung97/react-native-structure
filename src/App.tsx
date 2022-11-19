import React from 'react';
import { StyleSheet } from 'react-native';
import { RootNavigator } from '@/navigators';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const App = () => {
  return <RootNavigator />;
};
