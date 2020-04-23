import axios from 'react-native-axios'
import a from 'axi'
import fs,{downloadFile} from 'react-native-fs';

const downloadFiles = (ip, port, name) => {
  const downloadUrl = `http://${ip}:${port}/downloads?name=${name}`
  console.log(fs.ExternalDirectoryPath)
  downloadFile({
    fromUrl:downloadUrl,
    toFile:`${fs.DownloadDirectoryPath}/x.jpg`
  }).promise.then(res => {
    console.log(res)
  })
}

export {downloadFiles}
