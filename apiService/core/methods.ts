import axios from './interceptors'

const basePublicHeaders = {
  Accept: `*/*`,
  'Content-Type': `application/json`,
}

const basePublicMultipartHeaders = {
  Accept: `*/*`,
  'Content-Type': `multipart/form-data`,
}

interface Request {
  baseUrl: string
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

const sendRequest = async ({
  baseUrl,
  url,
  params,
  method,
  headers,
}: RequestWithParams) => {
  const baseHeaders = basePublicHeaders
  const response = await axios[method](baseUrl + url, {
    headers: { ...baseHeaders, ...headers },
    params,
    withCredentials: true,
  })
  return { ...response, axiosStatus: response.status }
}

const sendRequestForData = async ({
  baseUrl,
  url,
  params,
  data,
  method,
  headers,
  type,
}: RequestWithData) => {
  const baseHeaders =
    type === 'json' ? basePublicHeaders : basePublicMultipartHeaders
  const response = await axios[method](baseUrl + url, data, {
    headers: { ...baseHeaders, ...headers },
    params,
    withCredentials: true,
  })
  return { ...response, axiosStatus: response.status }
}

const sendInsertForData = async ({
  baseUrl,
  url,
  params,
  data,
  headers,
  method,
  type,
}: RequestWithData) => {
  const baseHeaders =
    type === 'json' ? basePublicHeaders : basePublicMultipartHeaders
  const response = await axios[method](baseUrl + url, {
    headers: { ...baseHeaders, ...headers },
    data,
    params,
    withCredentials: true,
  })
  return { ...response, axiosStatus: response.status }
}

export { sendInsertForData, sendRequest, sendRequestForData }
