type ByteUnit = 'B' | 'KB' | 'MB' | 'GB'
type SecondUnit = 'MS' | 'SEC'

export default class CommonConverter {
    public static convertByte(byte: number, unit: ByteUnit) {
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

    public static convertMillisecond(millisecond: number, unit: SecondUnit) {
        switch (unit) {
            case 'SEC':
                return Math.floor(millisecond / 1000)
            default:
                return millisecond
        }
    }
}
