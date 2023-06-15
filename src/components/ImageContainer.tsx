import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
import Rating from './Rating'

interface imageContainerProps {
  rating: number
}

export default function ImageContainer(props: imageContainerProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://images.pexels.com/photos/981916/pexels-photo-981916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} style={styles.img} />
      <Rating data={props.rating}/>
    </View>
  )
}

const styles = StyleSheet.create({
  img: {
    width: 110,
    height: 120,
    borderRadius: 15.
  },
  container: {
    position: 'relative',
    marginRight: 15,
  },
  ratingBox: {
    position: 'absolute',
    bottom: 5,
  },
})