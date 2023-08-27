import eventBus from '@utils/eventBus'
import renderEnv from '@utils/renderEnv'
import axios from 'axios'
import { EVENT_BUS_KEY } from 'constant/eventBusKey'

const createAxiosInstance = (baseURL: string) => {
    const instance = axios.create({ baseURL })

    instance.interceptors.response.use(
        (res) => res,
        (error) => {
            if (renderEnv.isCSR) {
                if (error.response?.status === 401) {
                    eventBus.dispatch(EVENT_BUS_KEY.UNAUTHORIZED_ERROR)
                    return null
                }
            }
            return Promise.reject(error)
        },
    )

    return instance
}

export default createAxiosInstance
