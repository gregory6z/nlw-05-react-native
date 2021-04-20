import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import colors from '../../styles/colors';

import wateringImg from '../assets/watering.png'
export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gérez vos {'\n'}  plantes  {'\n'} facilement
      </Text>

      <Image source={wateringImg} style={styles.image} />

      <Text style={styles.subtitle}>
        N'oubliez plus d'arroser vos plantes. {'\n'}
        Nous prenons soin de vous rappeler {'\n'}
         quand vous en avez besoin.
      </Text>

      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.buttonText}>
          >
        </Text>
      </TouchableOpacity>



    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 58

  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: colors.heading,

  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green,
    borderRadius: 16,
    marginBottom: 20,
    height: 56,
    width: 56

  },
  image: {
    width: 292,
    height: 284,
  },
  buttonText: {
    color: colors.white,
    fontSize: 24
  }
})