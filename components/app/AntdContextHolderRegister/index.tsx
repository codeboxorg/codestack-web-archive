import { message } from 'antd'
import React from 'react'

const AntdContextHolderRegister = () => {
  const [_, messageContextHolder] = message.useMessage()

  return <>{messageContextHolder}</>
}

export default AntdContextHolderRegister
