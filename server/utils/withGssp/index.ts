import { RemoteError } from '@api/error/remoteError'
import { GetServerSideProps } from 'next'

/**
 * 에러 핸들링이 포함된 getServerSideProps
 * (권한이 퍼블릭인 SSR페이지를 만들기 위해서는 모두 이 고차함수를 사용)
 * @param getServerSideProps
 */
export default function withGssp(getServerSideProps: GetServerSideProps): GetServerSideProps {
    return async (context) => {
        try {
            return await getServerSideProps(context)
        } catch (error) {
            if (!(error instanceof RemoteError)) {
                console.error('unhandled error', error)
                throw error
            }
            return {
                props: {
                    error: JSON.parse(JSON.stringify(error)),
                },
            }
        }
    }
}
