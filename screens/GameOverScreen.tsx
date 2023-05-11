import React from 'react';
import PrimaryButton from '../components/ui/PrimaryButton';
import Screen from '../components/ui/Screen';

type Props = {
  resetGameHandler: () => void;
};

export default function GameOverScreen({ resetGameHandler }: Props) {
  return (
    <Screen>
      <PrimaryButton onPress={resetGameHandler}>Reset</PrimaryButton>
    </Screen>
  );
}
