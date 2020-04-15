import React from 'react'
import {
  Text,
  StyleSheet,
  StatusBar,
  View,
  TouchableOpacity,
} from 'react-native'
import Connect from './Connect'

function Get() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Get Files</Text>
      <Text style={styles.h2}>on computers or phones</Text>
      <Connect style={styles.connect} />
      <Text style={styles.h3}>
        To transfer files, you must be connected to the same network.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2e86de',
  },
  h1: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  h2: {
    color: '#fff',
    fontSize: 18,
    marginTop: 5,
  },
  connect: {
    marginTop: 30,
  },
  h3: {
    color: '#fff',
    fontSize: 16,
    marginTop: 30,
    paddingHorizontal: '15%',
    textAlign: 'center',
  },
})

export default Get
