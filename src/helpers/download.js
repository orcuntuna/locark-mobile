import fs, {downloadFile} from 'react-native-fs';

const downloadFiles = (ip, port, name) => {
  const downloadUrl = `http://${ip}:${port}/downloads?name=${name}`
  downloadFile({
    fromUrl: downloadUrl,
    toFile: `${fs.DownloadDirectoryPath}/${name}`
  }).promise.then(res => {
    console.log(res)
  })
}

export {downloadFiles}
