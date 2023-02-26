const convertByte = (byte: number, unit: 'KB' | 'MB' | 'GB') => {
  switch (unit) {
    case 'KB':
      return Math.floor(byte / 1024.0)
    case 'MB':
      return Math.floor(byte / 1024.0 / 1024.0)
    case 'GB':
      return Math.floor(byte / 1024.0 / 1024.0 / 1024.0)
  }
}
export default convertByte
