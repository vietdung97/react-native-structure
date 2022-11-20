import { StyleSheet } from 'react-native';
import { spacing } from '@/theme';
import { scale } from '@/theme/scale';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: scale(spacing.xl),
  },
  formContainer: {
    borderRadius: scale(5),
    padding: scale(spacing.s),
    width: '100%',
  },
  submitButton: {
    marginTop: scale(spacing.m),
  },
});
