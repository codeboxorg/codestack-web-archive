import { useClipboard } from '@hooks/shared'
import { ComponentProps, useCallback, useEffect, useRef } from 'react'
import { problemContentStyle } from './ProblemContent.style'

const isHTMLButtonElement = (targetElement: EventTarget | null): targetElement is HTMLButtonElement =>
    targetElement instanceof HTMLButtonElement

const getClipboardTargetId = (event: MouseEvent) => {
    if (!isHTMLButtonElement(event.target)) return ''

    return event.target.dataset.clipboardTarget ?? ''
}

interface Props extends ComponentProps<'section'> {
    contentHTML: string
}

function ProblemContent({ contentHTML }: Props) {
    const problemContentRef = useRef<HTMLDivElement>(null)
    const { copy: clipboardCopy } = useClipboard()

    const getClipboardTargetElement = (clipboardTargetId: string) => {
        if (!problemContentRef.current) return

        return problemContentRef.current.querySelector(clipboardTargetId)
    }

    const handleClipboardCopy = useCallback(
        async (event: MouseEvent) => {
            if (!isHTMLButtonElement(event.target)) return

            const clipBoardTargetId = getClipboardTargetId(event)
            const clipBoardTargetElement = getClipboardTargetElement(clipBoardTargetId)

            if (!clipBoardTargetElement) return
            await clipboardCopy(clipBoardTargetElement.innerHTML)
        },
        [clipboardCopy],
    )

    useEffect(() => {
        if (!problemContentRef.current) return

        const allCopyButtonList = Array.from(
            problemContentRef.current.querySelectorAll<HTMLButtonElement>('.copy-button'),
        )

        allCopyButtonList.forEach((copyButton) => {
            copyButton.addEventListener('click', handleClipboardCopy)
        })

        return () =>
            allCopyButtonList.forEach((copyButton) => copyButton.removeEventListener('click', handleClipboardCopy))
    }, [handleClipboardCopy])

    return (
        // eslint-disable-next-line react/no-danger
        <section ref={problemContentRef} css={problemContentStyle} dangerouslySetInnerHTML={{ __html: contentHTML }} />
    )
}

export default ProblemContent
