import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import { useCallback } from 'react'

export const usePaginationParams = (): [number, typeof setPage] => {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const router = useRouter()

    const currentPage = Number(searchParams.get('page')) || 1

    const setPage = useCallback(
        (value: number) => {
            const newParams = new URLSearchParams(searchParams.toString())
            newParams.set('page', value.toString())

            router.push({ pathname, query: newParams.toString() })
        },
        [pathname, router, searchParams],
    )

    return [currentPage, setPage]
}
