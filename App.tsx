import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import Card from './src/components/Card'

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container} >
      <ScrollView style={styles.scroll}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    paddingHorizontal: 30,
    fontFamily: 'Arial',
  },
  container: {
  }
})

export default App;
