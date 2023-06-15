import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLocationDot, faBed, faBath, faMaximize } from '@fortawesome/free-solid-svg-icons';
import Service from './Service';
import ButtonLike from './ButtonLike';

export default function Details() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>The Willows</Text>
      <View style={styles.containerLocation}>
        <FontAwesomeIcon icon={faLocationDot} />
        <Text style={styles.subTitle}>3517 W. Gray St. Utica</Text>
      </View>
      <View style={styles.containerServices}>
        <Service text={'3'} icon={faBed}/>
        <Service text={'2'} icon={faBath}/>
        <Service text={'230 ft'} icon={faMaximize}/>
      </View>
      <View style={styles.containerBottom}>
        <Text style={styles.price}>$440/m</Text>
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