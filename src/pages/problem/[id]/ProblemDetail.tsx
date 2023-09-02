import CommonConverter from '@utils/convert/CommonConverter'
import { message } from 'antd'
import { MESSAGE } from '@constants/message'
import { useCallback, useEffect, useRef } from 'react'
import { useRootState } from '@hooks/shared'
import VProblemDetail, { VProblemDetailProps } from './VProblemDetail'

function ProblemDetail() {
    const { maxCpuTime, maxMemory, ...rest } = useRootState((state) => state.problem.problem)

    const problemDetailRef = useRef<HTMLDivElement>(null)

    const getLinkedClipboardTargetId = (event: MouseEvent) => {
        if (!(event.target instanceof HTMLButtonElement)) return
        return event.target.dataset.clipboardTarget
    }

    const getLinkedClipboardTargetElement = (clipboardTargetId: string | undefined) => {
        if (!clipboardTargetId || !problemDetailRef.current) return
        return problemDetailRef.current.querySelector(clipboardTargetId)
    }

    const handleClipboardCopy = useCallback(async (event: MouseEvent) => {
        if (event.target instanceof HTMLButtonElement) {
            const targetElement = getLinkedClipboardTargetElement(getLinkedClipboardTargetId(event))
            if (!targetElement) return
            try {
                await navigator.clipboard.writeText(targetElement.innerHTML)
                message.success(MESSAGE.functionMessage.success.clipboardCopy)
            } catch (_) {
                message.error(MESSAGE.functionMessage.error.clipboardCopy)
            }
        }
    }, [])

    useEffect(() => {
        if (!problemDetailRef.current) return
        const allCopyButtons = Array.from(problemDetailRef.current.querySelectorAll<HTMLButtonElement>('.copy-button'))
        allCopyButtons.forEach((button) => {
            button.addEventListener('click', handleClipboardCopy)
        })
        return () => allCopyButtons.forEach((button) => button.removeEventListener('click', handleClipboardCopy))
    }, [handleClipboardCopy])

    const vProblemDetailProps: VProblemDetailProps = {
        ...rest,
        maxMemory: `${CommonConverter.convertByte(maxMemory, 'MB')} MB`,
        maxCpuTime: `${CommonConverter.convertMillisecond(maxCpuTime, 'SEC')} 초`,
        possibleLanguage: rest.languages.map(({ name }) => name).join(', ') ?? '',
    }

    return <VProblemDetail ref={problemDetailRef} {...vProblemDetailProps} />
}

export default ProblemDetail
