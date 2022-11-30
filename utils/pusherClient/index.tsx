import Pusher from 'pusher-js'

//TODO : API KEY env 분리
export default new Pusher('57cf39635e84376ef2d4', {
  cluster: 'ap3',
})
