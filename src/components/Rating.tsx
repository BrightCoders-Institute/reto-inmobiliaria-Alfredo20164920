import { View, Text, StyleSheet } from 'react-native';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Rating() {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon={faStar} style={styles.icon}/>
      <Text style={styles.number}>4.3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#fbedb7',
    width: 60,
    padding: 2,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 5
  },
  icon: {
    color: '#eeba00',
  },
  number: {
    fontSize: 16,
    fontWeight: 'bold',
  }
})