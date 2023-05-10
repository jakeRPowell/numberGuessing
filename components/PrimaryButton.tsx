import { ReactNode } from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

type PrimaryButtonProps = {
  children: ReactNode;
  backgroundColor?: string;
  onPress?: () => void;
};

export default function PrimaryButton({
  onPress,
  backgroundColor = '#41b3a3',
  children,
}: PrimaryButtonProps) {
  const isAndroid = Platform.OS === 'android';

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{
          color: 'rgba(255,255,255,0.2)',
          borderless: true,
        }}
        style={({ pressed }) => [
          pressed
            ? [
                { backgroundColor: backgroundColor },
                styles.button,
                styles.pressed,
              ]
            : [{ backgroundColor: backgroundColor }, styles.button],
        ]}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    borderRadius: 25,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.26,
        shadowRadius: 2.26,
      },
      android: {
        elevation: 5,
      },
    }),
  },

  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
  pressed: {
    opacity: 0.5,
  },
});
