import { MESSAGE } from '@constants/message'
import { message } from 'antd'

export const useClipboard = () => {
    const copy = async (data: string) => {
        try {
            await navigator.clipboard.writeText(data)
            message.success(MESSAGE.FUNCTION_MESSAGE.success.clipboardCopy)
        } catch (_) {
            message.error(MESSAGE.FUNCTION_MESSAGE.error.clipboardCopy)
        }
    }

    return {
        copy,
    }
}
