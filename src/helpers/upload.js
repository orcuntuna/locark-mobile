import fs from 'react-native-fs'
import UploadStore from '../stores/UploadsStore'

const uploadFile = (file) => {
  const sourcePath = file.uri
  const path = fs.ExternalDirectoryPath + '/' + file.name
  fs.copyFile(sourcePath, path)
    .then((success) => {
      UploadStore.change_status(file.name, 1)
    })
    .catch((err) => {
      UploadStore.change_status(file.name, 2)
    })
}

const deleteFile = (file) => {
  const path = fs.ExternalDirectoryPath + '/' + file.name
  fs.unlink(path)
    .then((success) => {
      // return değeri bilecek
      console.log('FILE DELETE!')
    })
    .catch((err) => {
      console.log(err.message, err.code)
    })
}

const deleteAllFiles = (files) => {
  const path = fs.ExternalDirectoryPath + '/'
  fs.unlink(path)
    .then((success) => {
      // return değeri bilecek
      console.log('FILES DELETE!')
    })
    .catch((err) => {
      console.log(err.message, err.code)
    })
}

export { uploadFile, deleteFile, deleteAllFiles }
