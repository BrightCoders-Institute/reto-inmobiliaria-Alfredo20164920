import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Details from './Details';
import ImageContainer from './ImageContainer';

export default function Card() {
  return (
    <View style={styles.container}>
      <ImageContainer />
      {/* <Details /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#f5fdff',
    padding: 20,
    borderRadius: 10,
  },
});

