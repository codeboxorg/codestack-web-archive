import { useRootState } from '@hooks/useRootSelector'
import { convertByte, convertMS } from '@utils/convert/convertByte'
import { message } from 'antd'
import { MESSAGE } from 'constant/message'
import { useEffect, useRef } from 'react'
import VProblemDetail, { VProblemDetailProps } from './VProblemDetail'

const ProblemDetail = () => {
  const { max_cpu_time, max_memory, ...rest } = useRootState(
    (state) => state.problem.problem
  )

  const problemDetailRef = useRef<HTMLDivElement>(null)

  const getLinkedClipboardTargetId = (event: MouseEvent) => {
    if (!(event.target instanceof HTMLButtonElement)) return
    return event.target.dataset.clipboardTarget
  }

  const getLinkedClipboardTargetElement = (
    clipboardTargetId: string | undefined
  ) => {
    if (!clipboardTargetId || !problemDetailRef.current) return
    return problemDetailRef.current.querySelector(clipboardTargetId)
  }

  const handleClipboardCopy = async (event: MouseEvent) => {
    if (event.target instanceof HTMLButtonElement) {
      const targetElement = getLinkedClipboardTargetElement(
        getLinkedClipboardTargetId(event)
      )
      if (!targetElement) return
      try {
        await navigator.clipboard.writeText(targetElement.innerHTML)
        message.success(MESSAGE.functionMessage.success.clipboardCopy)
      } catch (_) {
        message.error(MESSAGE.functionMessage.error.clipboardCopy)
      }
    }
  }

  useEffect(() => {
    if (!problemDetailRef.current) return
    const allCopyButtons = Array.from(
      problemDetailRef.current.querySelectorAll<HTMLButtonElement>(
        '.copy-button'
      )
    )
    allCopyButtons.forEach((button) => {
      button.addEventListener('click', handleClipboardCopy)
    })
    return () =>
      allCopyButtons.forEach((button) =>
        button.removeEventListener('click', handleClipboardCopy)
      )
  }, [problemDetailRef.current])

  const vProblemDetailProps: VProblemDetailProps = {
    ...rest,
    max_memory: `${convertByte(max_memory, 'MB')} MB`,
    max_cpu_time: `${convertMS(max_cpu_time, 'SEC')} 초`,
    possibleLanguage: rest.language.map(({ name }) => name).join(', '),
  }

  return (
    <>
      <VProblemDetail ref={problemDetailRef} {...vProblemDetailProps} />
    </>
  )
}

export default ProblemDetail
