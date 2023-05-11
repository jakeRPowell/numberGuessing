import { View, Text, StyleSheet, Alert } from 'react-native';
import React, { SetStateAction, useState, useEffect } from 'react';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Screen from '../components/ui/Screen';
import { FontAwesome } from '@expo/vector-icons';

type Props = {
  userChoice: number;
  resetGameHandler: () => void;
  setGameIsOver: React.Dispatch<SetStateAction<boolean>>;
  updateGuesses: (arg: number) => void;
};

function generateRandomBetween(min: any, max: any, exclude?: any): any {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

function GameScreen(
  this: any,
  { userChoice, resetGameHandler, setGameIsOver, updateGuesses }: Props
) {
  const [currentGuess, setCurrentGuess] = useState<number | undefined>(
    generateRandomBetween(1, 100, userChoice)
  );
  const [minBoundary, setMinBoundary] = useState<number>(1);
  const [maxBoundary, setMaxBoundary] = useState<number>(100);
  const initialGuess = generateRandomBetween(1, 100, userChoice);

  const gameIsOver = () => {};

  useEffect(() => {
    if (currentGuess) {
      updateGuesses(currentGuess);
    } else {
      updateGuesses(initialGuess);
    }

    if (currentGuess === userChoice) {
      setGameIsOver(true);
    }
  }, [currentGuess]);

  const nextGuessHandler = (direction: 'lower' | 'higher') => {
    if (
      (direction === 'lower' && currentGuess && currentGuess < userChoice) ||
      (direction === 'higher' && currentGuess && currentGuess > userChoice)
    ) {
      Alert.alert('Please do not lie!', 'You will break the app...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }

    if (direction === 'lower' && currentGuess) {
      setMaxBoundary(currentGuess);
    } else if (direction === 'higher' && currentGuess) {
      setMinBoundary(currentGuess);
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  };

  return (
    <Screen>
      <NumberContainer>
        {currentGuess ? currentGuess : initialGuess}
      </NumberContainer>
      <View style={styles.buttonContainer}>
        <PrimaryButton
          onPress={nextGuessHandler.bind(this, 'lower')}
          backgroundColor={Colors.danger}
        >
          <FontAwesome name="minus" size={24} color="#fff" />
        </PrimaryButton>
        <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
          <FontAwesome name="plus" size={24} color="#fff" />
        </PrimaryButton>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
});

export default GameScreen;
