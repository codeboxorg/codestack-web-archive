import { AxiosInstance } from 'axios'

const basePublicHeaders = {
    Accept: `*/*`,
    'Content-Type': `application/json`,
}

const basePublicMultipartHeaders = {
    Accept: `*/*`,
    'Content-Type': `multipart/form-data`,
}

interface Request {
    axiosInstance: AxiosInstance
    url: string
    headers?: object
    method: 'get' | 'post' | 'put' | 'delete' | 'patch'
}

export interface RequestWithParams extends Request {
    params?: object
}

export interface RequestWithData extends Request {
    params?: object
    data?: object
    type?: 'multipart' | 'json'
}

const sendRequest = async ({ axiosInstance, url, params, method, headers }: RequestWithParams) => {
    const baseHeaders = basePublicHeaders
    const response = await axiosInstance[method](url, {
        headers: { ...baseHeaders, ...headers },
        params,
        withCredentials: true,
    })
    return { ...response, axiosStatus: response.status }
}

const sendRequestForData = async ({ axiosInstance, url, params, data, method, headers, type }: RequestWithData) => {
    const baseHeaders = type === 'json' ? basePublicHeaders : basePublicMultipartHeaders
    const response = await axiosInstance[method](url, data, {
        headers: { ...baseHeaders, ...headers },
        params,
        withCredentials: true,
    })
    return { ...response, axiosStatus: response.status }
}

// get, delete 에 data(body)를 끼워넣고 싶을때 사용
const sendInsertForData = async ({ axiosInstance, url, params, data, headers, method, type }: RequestWithData) => {
    const baseHeaders = type === 'json' ? basePublicHeaders : basePublicMultipartHeaders
    const response = await axiosInstance[method](url, {
        headers: { ...baseHeaders, ...headers },
        data,
        params,
        withCredentials: true,
    })
    return { ...response, axiosStatus: response.status }
}

export { sendInsertForData, sendRequest, sendRequestForData }
