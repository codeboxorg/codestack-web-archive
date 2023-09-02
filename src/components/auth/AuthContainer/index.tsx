import { message } from 'antd'
import { useRouter } from 'next/router'
import { ReactElement, useEffect } from 'react'
import { MESSAGE } from '@constants/message'
import { useAuth } from '@hooks/shared'

interface Props {
    children: ReactElement
    pagePermissionInfo: Required<PagePermissionInfo>
}

const AuthContainer = ({ children, pagePermissionInfo }: Props) => {
    const { push: routerPush } = useRouter()

    const { user } = useAuth()

    const { redirect, loadingFallback } = pagePermissionInfo

    useEffect(() => {
        if (user === null) return

        if (user === false) {
            message.info(MESSAGE.AUTH_MESSAGE.info.requiredLogin)
            routerPush(redirect)
        }
    }, [user, redirect, routerPush])

    if (user) {
        return children
    }

    return loadingFallback
}

export default AuthContainer
