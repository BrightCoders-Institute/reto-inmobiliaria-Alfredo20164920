import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Details from './Details';
import ImageContainer from './ImageContainer';

export default function Card() {
  return (
    <View style={styles.container}>
      <ImageContainer />
      <Details />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: '#f5fdff',
    backgroundColor: '#ddf',
    padding: 20,
    borderRadius: 10,
    marginVertical: 15,
  },
});

