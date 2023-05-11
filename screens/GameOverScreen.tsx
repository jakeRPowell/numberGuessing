import React from 'react';
import PrimaryButton from '../components/ui/PrimaryButton';
import Screen from '../components/ui/Screen';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import Bold from '../components/ui/Bold';

type Props = {
  resetGameHandler: () => void;
  guessesData: Array<number>;
  userNumber: number;
};

export default function GameOverScreen({
  resetGameHandler,
  guessesData,
  userNumber,
}: Props) {
  const guesses = guessesData.reverse();

  return (
    <Screen>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/success.png')}
          style={styles.image}
        />
      </View>
      <PrimaryButton onPress={resetGameHandler}>Reset</PrimaryButton>
      <Text>
        Your phone took <Bold>{guesses.length}</Bold> guesses to get{' '}
        <Bold>{userNumber}</Bold>
      </Text>
      <View style={{ height: 150 }}>
        <FlatList
          numColumns={5}
          data={guesses}
          renderItem={(guess) => <Text style={styles.text}>{guess.item}</Text>}
        />
      </View>
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

  text: {
    textAlign: 'center',
    margin: 10,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    borderRadius: 10,
  },
});
