import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

interface ServiceProps {
  text: string,
  icon: any,
}

export default function Service({text, icon}: ServiceProps) {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon style={styles.icon} icon={icon} size={18} testID='serviceTest'/>
      <Text style={styles.title}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    color: '#000',
  },
  icon: {
    color: '#747783',
  }
})