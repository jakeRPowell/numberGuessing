import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function GameScreen() {
  return (
    <View style={styles.screen}>
      <Text>GameScreen</Text>
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
});
