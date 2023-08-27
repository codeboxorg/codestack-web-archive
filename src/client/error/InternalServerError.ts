import { RemoteError } from './RemoteError'

export class InternalServerError extends RemoteError {
    public status: 500

    public name: 'InternalServerError'

    public data: any

    constructor(data: any) {
        const message = '500 InternalServerError'
        const description = data.message ?? '서버측 에러입니다.'
        super(description, message)
        this.status = 500
        this.name = 'InternalServerError'
        this.data = data
    }
}
