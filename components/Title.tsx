import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  children: ReactNode;
  color?: string;
};

export default function Title({ children, color = '#41b3a3' }: Props) {
  return (
    <View style={styles.titleView}>
      <Text style={[styles.titleText, { color: color }]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
    gap: 20,
  },
  titleText: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: 'bold',
  },
});
