import { RequestWithData, RequestWithParams, sendInsertForData, sendRequest, sendRequestForData } from './methods'

import axios from './interceptors'

class ApiCreator {
    constructor(private baseUrl: string) {}
    get({ url, params, headers }: Omit<RequestWithParams, 'method' | 'baseUrl'>) {
        return sendRequest({
            baseUrl: this.baseUrl,
            url,
            params,
            method: 'get',
            headers,
        })
    }
    post({ url, data, params, headers, type }: Omit<RequestWithData, 'method' | 'baseUrl'>) {
        return sendRequestForData({
            baseUrl: this.baseUrl,
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
            baseUrl: this.baseUrl,
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
            baseUrl: this.baseUrl,
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
            baseUrl: this.baseUrl,
            url,
            params,
            data,
            method: 'delete',
            headers,
            type: type ?? 'json',
        })
    }
    setDefaultAuthorizationHeader(token: string) {
        token && (axios.defaults.headers.common['Authorization'] = `Bearer ${token}`)
    }
    deleteDefaultAuthorizationHeader() {
        const { Authorization, ...rest } = axios.defaults.headers.common
        axios.defaults.headers.common = rest
    }
}

export { ApiCreator }
