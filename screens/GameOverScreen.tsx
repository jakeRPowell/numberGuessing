import React from 'react';
import PrimaryButton from '../components/ui/PrimaryButton';
import Screen from '../components/ui/Screen';
import { Image, StyleSheet, Text, View } from 'react-native';
import Bold from '../components/ui/Bold';

type Props = {
  resetGameHandler: () => void;
};

export default function GameOverScreen({ resetGameHandler }: Props) {
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
        Your phone took <Bold>X</Bold> guesses to get <Bold>Y</Bold>
      </Text>
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
