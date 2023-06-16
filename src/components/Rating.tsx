import { View, Text, StyleSheet } from 'react-native';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

interface RatingsProps {
  data: number,
}

export default function Rating(props: RatingsProps) {
  return (
    <View style={styles.container} testID='rating-component-test'>
      <FontAwesomeIcon icon={faStar} style={styles.icon} testID='ratingIconTest'/>
      <Text style={styles.number}>{props.data}</Text>
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