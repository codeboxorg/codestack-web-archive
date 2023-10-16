type ByteUnit = 'B' | 'KB' | 'MB' | 'GB'
type SecondUnit = 'MS' | 'SEC'

const convertByte = (byte: number, unit: ByteUnit) => {
    switch (unit) {
        case 'KB':
            return Math.floor(byte / 1024.0)
        case 'MB':
            return Math.floor(byte / 1024.0 / 1024.0)
        case 'GB':
            return Math.floor(byte / 1024.0 / 1024.0 / 1024.0)
        default:
            return byte
    }
}

const convertMillisecond = (millisecond: number, unit: SecondUnit) => {
    switch (unit) {
        case 'SEC':
            return Math.floor(millisecond / 1000)
        default:
            return millisecond
    }
}

export const Converter = {
    convertByte,
    convertMillisecond,
}
