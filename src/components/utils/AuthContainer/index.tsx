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

    const { signInMember } = useAuth()

    const { redirect, loadingFallback } = pagePermissionInfo

    useEffect(() => {
        if (signInMember === null) return

        if (signInMember === false) {
            message.info(MESSAGE.AUTH_MESSAGE.info.requiredSignIn)
            routerPush(redirect)
        }
    }, [signInMember, redirect, routerPush])

    if (signInMember) {
        return children
    }

    return loadingFallback
}

export default AuthContainer
