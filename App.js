import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(false);

  const pickedNumberHandler = (number) => {
    setUserNumber(number);
  };

  const resetGameHandler = () => {
    setUserNumber(null);
    setGameIsOver(false);
  };

  return (
    <LinearGradient colors={['#f7ae2f', '#f5e6cc']} style={styles.root}>
      <ImageBackground
        source={require('./assets/images/background.jpg')}
        resizeMode="cover"
        style={styles.root}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.root}>
          <StatusBar style="light" />
          <View style={styles.rootInner}>
            {gameIsOver ? (
              <GameOverScreen resetGameHandler={resetGameHandler} />
            ) : userNumber ? (
              <GameScreen
                setGameIsOver={setGameIsOver}
                userChoice={userNumber}
              />
            ) : (
              <StartGameScreen
                resetGameHandler={resetGameHandler}
                onPickNumber={pickedNumberHandler}
              />
            )}
          </View>
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  rootInner: {
    flex: 1,
    padding: 20,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    opacity: 0.5,
  },
});
