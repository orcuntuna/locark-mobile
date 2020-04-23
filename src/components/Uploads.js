import React from 'react'
import {
  Text,
  StyleSheet,
  StatusBar,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import DocumentPicker from 'react-native-document-picker'
import {uploadFile} from '../helpers/upload'
import {observer, inject} from 'mobx-react'
import FileSend from './FileSend'
import {startServer} from '../modules/HttpServer'
import uploadStore from "../stores/UploadsStore";
import arrayWithHoles from "@babel/runtime/helpers/esm/arrayWithHoles";

function Uploads({style, store}) {
  async function onPressAddFile() {
    startServer("asd", 5263)
    try {
      const selected_files = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.allFiles],
      })
      for (const file of selected_files) {
        const same_name_check = store.uploads.uploads_list.filter(
        )
        if (same_name_check.length === 0) {
          file["status"] = 0
          store.uploads.add_upload_item(file)
          const upload_result = await uploadFile(file)
          if (upload_result === 1) {
            store.uploads.change_status(file.name)
          }
          console.log(upload_result)
        } else {
          ToastAndroid.show(file.name + ' already selected', ToastAndroid.SHORT)
        }
      }
    } catch (err) {
      if (!DocumentPicker.isCancel(err)) {
        ToastAndroid.show('File selection failed', ToastAndroid.SHORT)
        console.log(err)
      }
    }
  }

  return (
    <View style={[styles.uploads, {...style}]}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Your shared files</Text>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => onPressAddFile()}
        >
          <Icon name={'plus'} size={24} color={'#FFF'}/>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.list}>
        {store.uploads.uploads_list.length ? (
          store.uploads.uploads_list.map((item, index) => (
            <FileSend key={'filesend-' + index} data={item}/>
          ))
        ) : (
          <Text style={styles.message}>You haven't added a file yet.</Text>
        )}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  uploads: {
    width: '100%',
  },
  header: {
    backgroundColor: '#333',
    height: 50,
    width: '100%',
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    color: '#FFF',
  },
  headerButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
    maxHeight: 205,
  },
  message: {
    paddingVertical: 14,
  },
})
export default inject('store')(observer(Uploads))
