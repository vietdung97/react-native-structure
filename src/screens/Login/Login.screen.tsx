import React, { Text, View } from 'react-native';
import { ILoginProps } from './types/login.prop';
import { styles } from './Login.style';

export const Login = (props: ILoginProps) => {
  return (
    <View style={styles.container}>
      <Text>Login screen</Text>
    </View>
  );
};
