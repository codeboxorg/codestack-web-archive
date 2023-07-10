import { AxiosInstance } from 'axios'
import { RequestWithData, RequestWithParams, sendInsertForData, sendRequest, sendRequestForData } from './methods'

class RestAPI {
    constructor(private axiosInstance: AxiosInstance) {}

    get({ url, params, headers }: Omit<RequestWithParams, 'method' | 'baseUrl'>) {
        return sendRequest({
            axiosInstance: this.axiosInstance,
            url,
            params,
            method: 'get',
            headers,
        })
    }

    post({ url, data, params, headers, type }: Omit<RequestWithData, 'method' | 'baseUrl'>) {
        return sendRequestForData({
            axiosInstance: this.axiosInstance,
            url,
            data,
            params,
            method: 'post',
            headers,
            type: type ?? 'json',
        })
    }

    put({ url, data, params, headers, type }: Omit<RequestWithData, 'method' | 'baseUrl'>) {
        return sendRequestForData({
            axiosInstance: this.axiosInstance,
            url,
            data,
            params,
            method: 'put',
            headers,
            type: type ?? 'json',
        })
    }

    patch({ url, data, params, headers, type }: Omit<RequestWithData, 'method' | 'baseUrl'>) {
        return sendRequestForData({
            axiosInstance: this.axiosInstance,
            url,
            data,
            params,
            method: 'patch',
            headers,
            type: type ?? 'json',
        })
    }

    delete({ url, data, params, headers, type }: Omit<RequestWithData, 'method' | 'baseUrl'>) {
        return sendInsertForData({
            axiosInstance: this.axiosInstance,
            url,
            params,
            data,
            method: 'delete',
            headers,
            type: type ?? 'json',
        })
    }

    setDefaultAuthorizationHeader(token: string) {
        if (token) this.axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`
    }

    deleteDefaultAuthorizationHeader() {
        const { Authorization: _, ...rest } = this.axiosInstance.defaults.headers.common
        this.axiosInstance.defaults.headers.common = rest
    }
}

export default RestAPI
