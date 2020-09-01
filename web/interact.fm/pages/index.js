// @generated: @expo/next-adapter@2.1.20
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from '@interact/components';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Expo + Next.js 👋</Text>
      <Button>button</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});
