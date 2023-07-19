import { message } from 'antd'

function AntdContextRoot() {
    const [_, messageContextHolder] = message.useMessage()

    return messageContextHolder
}

export default AntdContextRoot
