import React, { useState } from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';
import Screen from '../components/ui/Screen';
type Props = {
  onPickNumber: (chosenNumber: number) => void;
  resetGameHandler: () => void;
};

export default function StartGameScreen({
  onPickNumber,
  resetGameHandler,
}: Props) {
  const [enteredNumber, setEnteredNumber] = useState('');

  const numberInputHandler = (inputText: string) => {
    setEnteredNumber(inputText);
  };

  const resetHandler = () => {
    resetGameHandler();
    setEnteredNumber('');
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [{ text: 'Okay', style: 'destructive' }]
      );
      return;
    } else {
      onPickNumber(chosenNumber);
    }
  };

  return (
    <Screen>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />

      <View style={styles.buttonContainer}>
        <PrimaryButton backgroundColor={Colors.danger} onPress={resetHandler}>
          Reset
        </PrimaryButton>
        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  numberInput: {
    textAlign: 'center',
    width: 50,
    height: 50,
    fontSize: 30,
    borderBottomColor: Colors.border,
    borderBottomWidth: 2,
    fontWeight: 'bold',
    color: Colors.border,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
});
