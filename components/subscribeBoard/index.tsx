import { useState } from 'react'
import pusherClient from '@utils/pusherClient'

const SubscribeBoard = () => {
  const [state, setState] = useState('ss')

  var channel = pusherClient.subscribe('subscribe')
  channel.bind('subscribe:problem', (data: string) => {
    setState(JSON.stringify(data))
  })
  return <div>{state}</div>
}

export default SubscribeBoard
