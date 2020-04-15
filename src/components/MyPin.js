import React from 'react'
import {
  Text,
  StyleSheet,
  StatusBar,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

function MyPin({ style }) {
  return (
    <View style={[styles.connect, { ...style }]}>
      <TextInput style={styles.input} editable={false} value={'JKSALY'} />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
      >
        <Icon style={styles.icon} name={'camera'} size={20} color={'#333'} />
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
    letterSpacing: 1,
    fontWeight: 'bold',
  },
  button: {
    height: 50,
    borderRadius: 3,
    backgroundColor: '#eaeaea',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  icon: {
    color: '#333',
    paddingHorizontal: 20,
    fontWeight: 'bold',
  },
})

export default MyPin
