import { StyleSheet } from 'react-native';
import { scale } from './scale';

export const typography = StyleSheet.create({
  title: {
    fontSize: scale(18),
    fontWeight: '700',
  },
  text: {
    fontSize: scale(16),
    fontWeight: '400',
  },
  label: {
    fontSize: scale(16),
    fontWeight: '700',
  },
  error: {
    fontSize: scale(14),
    fontWeight: '400',
  },
});
