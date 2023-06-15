import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLocationDot, faBed, faBath, faMaximize } from '@fortawesome/free-solid-svg-icons';
import Service from './Service';
import ButtonLike from './ButtonLike';

interface DetailsProps {
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
  details: DetailsProps
}

export default function Details(props: propsType) {
  const {name, address, number_rooms, number_restrooms, area, cost_month} = props.details;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.containerLocation}>
        <FontAwesomeIcon icon={faLocationDot} />
        <Text style={styles.subTitle}>{address}</Text>
      </View>
      <View style={styles.containerServices}>
        <Service text={number_rooms.toString()} icon={faBed}/>
        <Service text={number_restrooms.toString()} icon={faBath}/>
        <Service text={`${area} ft`} icon={faMaximize}/>
      </View>
      <View style={styles.containerBottom}>
        <Text style={styles.price}>${cost_month}/m</Text>
        <ButtonLike />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    containerLocation: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
    },
    containerBottom: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    title: {
      fontWeight: '600',
      fontSize: 24,
      color: '#000',
    },
    subTitle: {
      color: '#737373'
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    containerServices: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    price: {
      fontSize: 20,
      color: '#000'
    }
  });