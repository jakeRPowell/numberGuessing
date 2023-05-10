import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Title from '../components/Title';

export default function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Opponent's guess</Title>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
    gap: 20,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
});
