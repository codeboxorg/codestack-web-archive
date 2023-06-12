import { useEffect } from 'react'

/**
 * tailwindcss 3버전과 ant-design의 style 우선순위 충돌 이슈
 * https://github.com/ant-design/ant-design/issues/38794#issuecomment-1364501286
 * 추후 버전 업데이트 확인 후 삭제처리
 */
function AntdAndTailwindConflictResolver() {
    useEffect(() => {
        const head = document.querySelector('head')
        if (head === null) return

        const tailWindStyleTag = Array.from(head.querySelectorAll('style')).find((style) =>
            style.innerHTML.includes('tailwind'),
        )
        if (!tailWindStyleTag) return

        head.insertAdjacentElement('afterbegin', tailWindStyleTag)
    }, [])
    return null
}

export default AntdAndTailwindConflictResolver
