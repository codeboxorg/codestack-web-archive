import { RemoteError } from './RemoteError'

export class BadRequestError extends RemoteError {
    public status: 400

    public name: 'BadRequestError'

    public data: any

    constructor(data: any) {
        const message = '400 BadRequestError'
        const fieldErrorDescription: string[] = data.errors
            ? Object.entries(data.errors).map(([_, errorCause]) => errorCause as string)
            : [data.message ?? '잘못된 요청입니다.']
        super(fieldErrorDescription, message)
        this.status = 400
        this.name = 'BadRequestError'
        this.data = data
    }
}
