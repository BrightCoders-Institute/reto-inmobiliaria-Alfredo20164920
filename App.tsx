import React, {useState} from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from './src/components/Card'
import data from './src/data/data.json'

function App(): JSX.Element {

  const [info, setInfo] = useState(data.hotels);

  console.log(info);

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator style={styles.scroll}>
        {
          info.map((hotel, index) => (
            <View key={index}>
              <Card hotel={hotel}/>
            </View>
          ))
        }
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    paddingHorizontal: 30,
    fontFamily: 'Arial',
  },
})

export default App;
