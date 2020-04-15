import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { fileSizeConvert } from '../helpers/file'
import {  deleteFile } from '../helpers/upload';

function FileSend({ style, data }) {
  function onPressDelete() {
    Alert.alert(
      'Warning',
      'Remove file from list?',
      [{ text: 'Cancel' }, { text: 'Delete', onPress: () => deleteFile(data) }],
      {
        cancelable: true,
      },
    )
  }
  return (
    <View style={[styles.file, { ...style }]}>
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>
          {data.name}
        </Text>
        <Text style={styles.size} numberOfLines={1}>
          {fileSizeConvert(data.size)}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => onPressDelete()}
        style={styles.button}
        activeOpacity={0.6}
      >
        <Icon name={'trash-2'} size={18} color={'#555'} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  file: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  info: {
    flex: 1,
    paddingRight: 15,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    color: '#333',
  },
  size: {
    color: '#666',
    fontSize: 12,
  },
})

export default FileSend
