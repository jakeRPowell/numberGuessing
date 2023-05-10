import React, { useState } from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Colors from '../constants/colors';
type Props = {
  onPickNumber: (chosenNumber: number) => void;
};

export default function StartGameScreen({ onPickNumber }: Props) {
  const [enteredNumber, setEnteredNumber] = useState('');

  const numberInputHandler = (inputText: string) => {
    setEnteredNumber(inputText);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [{ text: 'Okay', style: 'destructive', onPress: reset }]
      );
      return;
    } else {
      onPickNumber(chosenNumber);
    }
  };

  const reset = () => {
    console.log('reset');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />

      <View style={styles.buttonContainer}>
        <PrimaryButton backgroundColor={Colors.danger} onPress={reset}>
          Reset
        </PrimaryButton>
        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
    gap: 20,
  },

  numberInput: {
    textAlign: 'center',
    width: 50,
    height: 50,
    fontSize: 30,
    borderBottomColor: '#85dcbe',
    borderBottomWidth: 2,
    fontWeight: 'bold',
    color: '#85dcbe',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
});
