import { RemoteError } from '@client/error'
import { AuthContainer } from '@components/utils'
import { useRouter } from 'next/router'
import { ReactElement, useEffect } from 'react'

type Props = {
    error?: RemoteError & { status?: number }
    pagePermissionInfo: Required<PagePermissionInfo>
    isPermissionRequired: boolean
    children: ReactElement
}

function SSRErrorHandleContainer({ error, pagePermissionInfo, isPermissionRequired, children }: Props) {
    const { push: routerPush } = useRouter()
    const { redirect } = pagePermissionInfo

    if (error) console.debug('SSRErrorHandler', error)

    useEffect(() => {
        if (!error) return
        switch (error.status) {
            case 401:
                routerPush(redirect)
                break
            default:
                routerPush('/error')
        }
    }, [error, redirect, routerPush])

    /**
     * 에러가 있는경우 null 리턴 (렌더링 후 useEffect에서 리다이렉트 시키기 위해)
     */
    if (error) {
        return null
    }

    /**
     * Next server측에서 오류가 없더라도 CSR시에 프라이빗 라우팅을 유지하기 위해 권한이 필요한 페이지인 경우
     * AuthContainer로 감싸준다.
     */
    if (isPermissionRequired) {
        return <AuthContainer pagePermissionInfo={pagePermissionInfo}>{children}</AuthContainer>
    }

    return children
}

export default SSRErrorHandleContainer
