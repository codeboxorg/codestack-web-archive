import { AxiosError } from 'axios'
import { BadRequestError } from './BadRequestError'
import { UnauthorizedError } from './UnauthorizedError'
import { ForbiddenError } from './ForbiddenError'
import { NotFoundError } from './NotFoundError'
import { InternalServerError } from './InternalServerError'

export const throwRemoteError = (error: unknown) => {
    if (error instanceof AxiosError) {
        const status = error.response?.status
        const data = error.response?.data
        switch (status) {
            case 400:
                throw new BadRequestError(data)
            case 401:
                throw new UnauthorizedError(data)
            case 403:
                throw new ForbiddenError(data)
            case 404:
                throw new NotFoundError(data)
            case 500:
                throw new InternalServerError(data)
            default:
                throw error
        }
    } else {
        throw error
    }
}
