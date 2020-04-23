import React from 'react'
import {
  Text,
  StyleSheet,
  StatusBar,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import {downloadFiles} from '../helpers/download'

const onPressDownloadFile = () => {
  downloadFiles("192.168.1.33", "5263", "")
}

function Connect({style}) {
  return (
    <View style={[styles.connect, {...style}]}>
      <TextInput style={styles.input} placeholder={'Connection PIN'}/>
      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.buttonText}
              onPress={() => onPressDownloadFile()}>Connect</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  connect: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '10%',
  },
  input: {
    flex: 1,
    height: 50,
    borderRadius: 3,
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
    fontSize: 16,
    color: '#333',
  },
  button: {
    height: 50,
    borderRadius: 3,
    backgroundColor: '#eaeaea',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  buttonText: {
    color: '#333',
    paddingHorizontal: 20,
    fontWeight: 'bold',
  },
})

export default Connect
