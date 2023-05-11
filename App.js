import React, { useState, useCallback } from 'react';
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
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(false);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  const pickedNumberHandler = (number) => {
    setUserNumber(number);
  };

  const resetGameHandler = () => {
    setUserNumber(null);
    setGameIsOver(false);
  };
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <LinearGradient
      colors={['#f7ae2f', '#f5e6cc']}
      style={styles.root}
      onLayout={onLayoutRootView}
    >
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
