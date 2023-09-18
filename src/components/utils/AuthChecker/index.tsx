import { useAuth } from '@hooks/shared'
import { useEffect } from 'react'

function AuthChecker() {
    const { signInMember, initMember } = useAuth()

    useEffect(() => {
        if (signInMember) return
        initMember()
    }, [initMember, signInMember])

    return null
}

export default AuthChecker
