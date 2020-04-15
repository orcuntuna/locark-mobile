import React from 'react'
import { Text, StyleSheet, StatusBar, View } from 'react-native'
import MyPin from './MyPin'
import Uploads from './Uploads'

function Send() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Send Files</Text>
      <Text style={styles.h2}>on computers or phones</Text>
      <MyPin style={styles.connect} />
      <Uploads style={styles.uploads} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#20bf6b',
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
  uploads: {
    width: '80%',
    marginTop: 25,
  },
})

export default Send
