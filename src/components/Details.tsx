import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Details() {
  return (
    <View style={styles.container}>
      {/* TITLE */}
      <Text style={styles.title}>The Willows</Text>
      {/* SUBTITLE */}
      <View style={styles.containerLocation}>
        <FontAwesomeIcon icon={faLocationDot} />
        <Text style={styles.subTitle}>3517 W. Gray St. Utica</Text>
      </View>
      {/* ICONS */}
      <Text>Icon</Text>
      {/* PRICE */}
      <View style={styles.containerBottom}>
        <Text>Price</Text>
        <Text>Button like</Text>
      </View>
      {/* BUTTON LIKE */}

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
      marginBottom: 5,
    },
    subTitle: {
      color: '#737373'
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }
  });