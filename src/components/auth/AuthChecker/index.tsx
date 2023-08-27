import useAuth from '@hooks/useAuth'
import { useEffect } from 'react'

function AuthChecker() {
    const { user, initMember } = useAuth()

    useEffect(() => {
        if (user) return
        initMember()
    }, [initMember, user])

    return null
}

export default AuthChecker
