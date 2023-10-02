import { isString } from 'lodash-es'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const useProblemInfoForSubmit = () => {
    const { isReady: routerIsReady, query, push: routerPush } = useRouter()

    const { id, languageListJSON } = query

    const languageList: Language[] = isString(languageListJSON) ? JSON.parse(languageListJSON) : []

    useEffect(() => {
        if (languageListJSON && routerIsReady) return

        routerPush({ pathname: `/problem/[id]`, query: { id } }, `/problem/${id}`)
    }, [languageListJSON, id, routerIsReady, routerPush])

    return {
        problemId: Number(id),
        languageList,
    }
}
