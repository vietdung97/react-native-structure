// import { useAppSelector } from '@/stores';
import { useAppSelector } from '@/stores';
import React, { Text, View } from 'react-native';
import { styles } from './Home.style';
import { IHomeProps } from './types/home.prop';

export const Home = (props: IHomeProps) => {
  const user = useAppSelector(state => state.authState.user);
  console.log({ user });
  
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
    </View>
  );
};
