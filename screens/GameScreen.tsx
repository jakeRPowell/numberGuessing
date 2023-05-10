import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import { Colors } from 'react-native/Libraries/NewAppScreen';

type Props = {
  userChoice: number;
};

function generateRandomBetween(min: any, max: any, exclude?: any): any {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

export default function GameScreen({ userChoice }: Props) {
  const initialGuess = generateRandomBetween(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState();

  const nextGuessHandler = (direction: 'lower' | 'higher') => {
    direction === 'lower'
      ? setCurrentGuess(generateRandomBetween(1, currentGuess, currentGuess))
      : console.log('higher');
  };

  return (
    <View style={styles.screen}>
      <NumberContainer>
        {currentGuess ? currentGuess : initialGuess}
      </NumberContainer>
      {/* controls */}
      <View style={styles.buttonContainer}>
        <PrimaryButton backgroundColor={Colors.danger}>Lower</PrimaryButton>
        <PrimaryButton>Higher</PrimaryButton>
      </View>
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
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
});
