export class RemoteError extends Error {
    /**
     * @param description 사용자에게 표출할 오류 설명
     * @param message 디버깅용 메시지
     */
    constructor(public description: string | string[], message: string) {
        super(message)
    }
}
