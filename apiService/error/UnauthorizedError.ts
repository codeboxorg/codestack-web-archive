import { RemoteError } from './RemoteError'

export class UnauthorizedError extends RemoteError {
    public status: 401

    public name: 'UnauthorizedError'

    public data: any

    constructor(data: any) {
        const message = '401 UnauthorizedError'
        const description = data.message ?? '권한이 없는 사용자 입니다.'
        super(description, message)
        this.status = 401
        this.name = 'UnauthorizedError'
        this.data = data
    }
}
