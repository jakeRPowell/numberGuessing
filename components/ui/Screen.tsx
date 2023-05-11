import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Screen = ({ children }: Props) => {
  return <View style={styles.screen}>{children}</View>;
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
    gap: 20,
  },
});
