import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/colors';

type Props = {
  children: ReactNode;
  color?: string;
  style?: any;
};

export default function Title({
  children,
  color = Colors.primary,
  style,
}: Props) {
  return (
    <View style={styles.titleView}>
      <Text style={[styles.titleText, { color: color }, style]}>
        {children}
      </Text>
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
