import { View, Text, StyleSheet, Alert } from 'react-native';
import React, { SetStateAction, useState, useEffect } from 'react';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Screen from '../components/ui/Screen';

type Props = {
  userChoice: number;
  resetGameHandler: () => void;
  setGameIsOver: React.Dispatch<SetStateAction<boolean>>;
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
  { userChoice, resetGameHandler, setGameIsOver }: Props
) {
  const [currentGuess, setCurrentGuess] = useState<number | undefined>(
    generateRandomBetween(1, 100, userChoice)
  );
  const [rounds, setRounds] = useState<number>(0);
  const [minBoundary, setMinBoundary] = useState<number>(1);
  const [maxBoundary, setMaxBoundary] = useState<number>(100);
  const initialGuess = generateRandomBetween(1, 100, userChoice);

  const gameIsOver = () => {
    setGameIsOver(true);
  };

  useEffect(() => {
    if (currentGuess === userChoice) {
      Alert.alert('Game Over!', `It only took ${rounds} rounds`, [
        { text: 'OK', style: 'cancel', onPress: gameIsOver },
      ]);
    }
  }, [currentGuess]);

  const nextGuessHandler = (direction: 'lower' | 'higher') => {
    setRounds((currentRounds) => currentRounds + 1);
    console.log(
      `direction: ${direction}, currentGuess: ${currentGuess}, userChoice: ${userChoice}, minBoundary: ${minBoundary}, maxBoundary: ${maxBoundary}`
    );

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
    console.log(newRndNumber);
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
          Lower
        </PrimaryButton>
        <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
          Higher
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
