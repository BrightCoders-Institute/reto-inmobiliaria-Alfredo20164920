import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Details from './Details';
import ImageContainer from './ImageContainer';

interface RoomType {
  id: number,
  name: string,
  address: string,
  number_rooms: number,
  number_restrooms: number,
  area: number,
  cost_month: number,
  rating: number,
}

interface propsType {
  hotel: RoomType
}

export default function Card(props: propsType) {
  const {hotel} = props;
  const {rating} = hotel;



  return (
    <View style={styles.container}>
      <ImageContainer rating={rating}/>
      <Details details={hotel} />
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

