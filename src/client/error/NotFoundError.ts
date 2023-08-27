import { RemoteError } from './RemoteError'

export class NotFoundError extends RemoteError {
    public status: 404

    public name: 'NotFoundError'

    public data: any

    constructor(data: any) {
        const message = '404 NotFoundError'
        const description = data.message ?? '요청하신 정보를 찾을 수 없습니다.'
        super(description, message)
        this.status = 404
        this.name = 'NotFoundError'
        this.data = data
    }
}
