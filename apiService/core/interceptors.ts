import eventBus from '@utils/eventBus'
import axios from 'axios'
import { EVENT_BUS_KEY } from 'constant/eventBusKey'

const instance = axios.create()

/**
 * Error 관찰 중 통신과정에서 401 에러 발생시
 * 강제 로그아웃을 위해 이벤트 전파
 */
instance.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      eventBus.dispatch(EVENT_BUS_KEY.UNAUTHORIZED_ERROR)
      return null
    }
    return Promise.reject(error)
  }
)

export default instance