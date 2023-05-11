import React from 'react';
import PrimaryButton from '../components/ui/PrimaryButton';
import Screen from '../components/ui/Screen';
import { Image, StyleSheet, Text, View } from 'react-native';
import Bold from '../components/ui/Bold';

type Props = {
  resetGameHandler: () => void;
  guesses: number;
  userNumber: number;
};

export default function GameOverScreen({
  resetGameHandler,
  guesses,
  userNumber,
}: Props) {
  return (
    <Screen>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/success.png')}
          style={styles.image}
        />
      </View>
      <Text>
        Your phone took <Bold>{guesses}</Bold> guesses to get{' '}
        <Bold>{userNumber}</Bold>
      </Text>
      <PrimaryButton onPress={resetGameHandler}>Reset</PrimaryButton>
    </Screen>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: '50%',
    aspectRatio: 1,
    borderRadius: 100000,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
