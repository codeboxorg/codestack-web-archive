import { RemoteError } from './RemoteError'

export class ForbiddenError extends RemoteError {
    public status: 403

    public name: 'ForbiddenError'

    public data: any

    constructor(data: any) {
        const message = '403 ForbiddenError'
        const description = data.message ?? '금지된 요청입니다.'
        super(description, message)
        this.status = 403
        this.name = 'ForbiddenError'
        this.data = data
    }
}
