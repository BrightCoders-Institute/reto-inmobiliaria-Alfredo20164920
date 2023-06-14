import { View, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function ButtonLike() {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon={faHeart} size={12} style={styles.icon}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00B074',
    width: 25,
    height: 25,
    borderRadius: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: '#fff',
  }
})