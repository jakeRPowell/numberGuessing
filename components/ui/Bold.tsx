import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Bold = ({ children }: Props) => {
  return <Text style={{ fontFamily: 'open-sans-bold' }}>{children}</Text>;
};

export default Bold;
