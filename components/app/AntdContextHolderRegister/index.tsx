import { message } from 'antd'

function AntdContextHolderRegister() {
  const [_, messageContextHolder] = message.useMessage()

  return messageContextHolder
}

export default AntdContextHolderRegister
