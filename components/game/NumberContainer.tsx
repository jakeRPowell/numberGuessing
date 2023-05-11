import { View, Text, StyleSheet } from 'react-native';
import React, { ReactNode } from 'react';
import Title from '../ui/Title';

type Props = {
  children: ReactNode;
};

export default function NumberContainer({ children }: Props) {
  return (
    <View style={styles.container}>
      <Title style={styles.customTitle}>Opponent's guess</Title>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  customTitle: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: '100%',
    gap: 20,
  },
  text: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: 'bold',
  },
});
