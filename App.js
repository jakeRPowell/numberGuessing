import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimaryButton from './components/PrimaryButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!!!!</Text>
      <PrimaryButton>Hello</PrimaryButton>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
