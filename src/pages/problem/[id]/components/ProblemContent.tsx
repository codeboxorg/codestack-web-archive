import { useClipboard, useRootState } from '@hooks/shared'
import { useCallback, useEffect, useRef } from 'react'

const isHTMLButtonElement = (targetElement: EventTarget | null): targetElement is HTMLButtonElement =>
    targetElement instanceof HTMLButtonElement

const getClipboardTargetId = (event: MouseEvent) => {
    if (!isHTMLButtonElement(event.target)) return ''

    return event.target.dataset.clipboardTarget ?? ''
}

function ProblemContent() {
    const { description } = useRootState((state) => state.problem.problem)

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
        <>
            {description.map((e) => (
                <div>
                    <h2 className='text-2xl'>{e.title}</h2>
                    <div>{e.content}</div>
                </div>
            ))}
        </>
    )
}

export default ProblemContent
