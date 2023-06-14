import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Card from './src/components/Card'

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Card />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 30,
    fontFamily: 'Arial'
  }
})

export default App;
