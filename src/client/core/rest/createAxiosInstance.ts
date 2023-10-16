import { EVENT_BUS_KEY } from '@constants/event-bus'
import { EventBus } from '@utils/event-bus'
import { RenderEnvironment } from '@utils/render-environment'
import axios from 'axios'

const createAxiosInstance = (baseURL: string) => {
    const instance = axios.create({ baseURL })

    instance.interceptors.response.use(
        (res) => res,
        (error) => {
            if (RenderEnvironment.isCSR) {
                if (error.response?.status === 401) {
                    EventBus.dispatch(EVENT_BUS_KEY.UNAUTHORIZED_ERROR)
                    return null
                }
            }
            return Promise.reject(error)
        },
    )

    return instance
}

export default createAxiosInstance
