import { useRootState } from '@hooks/useRootSelector'
import dynamic from 'next/dynamic'
import { Suspense, useEffect } from 'react'
import VProblemDetail, { VProblemDetailProps } from './VProblemDetail'
import { convertByte, convertMS } from '@utils/convert/convertByte'
import { message } from 'antd'
import { MESSAGE } from 'constant/message'

const VAC = dynamic(import('react-vac'), { ssr: false })

const ProblemDetail = () => {
  const { max_cpu_time, max_memory, ...rest } = useRootState(
    (state) => state.problem.problem
  )

  const handleClipboardCopy = async (event: MouseEvent) => {
    if (event.target instanceof HTMLButtonElement) {
      const clipboardTargetId = event.target.dataset.clipboardTarget
      if (!clipboardTargetId) return
      const targetElement = document.querySelector(clipboardTargetId)
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
    const allCopyButtons = Array.from(
      document.querySelectorAll<HTMLButtonElement>('.copy-button')
    )
    allCopyButtons.forEach((button) => {
      button.addEventListener('click', handleClipboardCopy)
    })
    return () =>
      allCopyButtons.forEach((button) =>
        button.removeEventListener('click', handleClipboardCopy)
      )
  }, [])

  const vProblemDetailProps: VProblemDetailProps = {
    ...rest,
    max_memory: `${convertByte(max_memory, 'MB')} MB`,
    max_cpu_time: `${convertMS(max_cpu_time, 'SEC')} 초`,
    possibleLanguage: rest.language.map(({ name }) => name).join(', '),
  }

  return (
    <>
      <VProblemDetail {...vProblemDetailProps} />
      <div className="mt-30">
        <Suspense>
          <VAC name="VProblemDetail" data={vProblemDetailProps} />
        </Suspense>
      </div>
    </>
  )
}

export default ProblemDetail
