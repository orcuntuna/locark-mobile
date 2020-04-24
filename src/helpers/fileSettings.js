const fileIcon = (type) => {
}

const fileSizeConvert = (size) => {
  if (size > 1048576) {
    return `${(size / 1048576).toFixed(2)} mb`
  } else if (size > 1024) {
    return `${(size / 1024).toFixed(2)} kb`
  }
  return `${size} byte`
}

export {fileIcon, fileSizeConvert}
