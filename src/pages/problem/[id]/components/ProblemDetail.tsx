import BaseTable from '@components/core/BaseTable'
import { MESSAGE } from '@constants/message'
import { useRootState } from '@hooks/shared'
import CommonConverter from '@utils/convert/CommonConverter'
import { message } from 'antd'
import { useCallback, useEffect, useRef } from 'react'
import ProblemBody from './ProblemContent'

const TABLE_COLUMN_LIST = [
    {
        title: '시간 제한',
        dataIndex: 'maxCpuTime',
        key: 'maxCpuTime',
    },
    {
        title: '메모리 제한',
        dataIndex: 'maxMemory',
        key: 'maxMemory',
    },
    {
        title: '제출',
        dataIndex: 'submission',
        key: 'submission',
    },
    {
        title: '정답',
        dataIndex: 'accepted',
        key: 'accepted',
    },
    {
        title: '풀이 가능 언어',
        dataIndex: 'possibleLanguage',
        key: 'possibleLanguage',
    },
]

function ProblemDetail() {
    const detail = useRootState((state) => state.problem.problem)

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
                message.success(MESSAGE.FUNCTION_MESSAGE.success.clipboardCopy)
            } catch (_) {
                message.error(MESSAGE.FUNCTION_MESSAGE.error.clipboardCopy)
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

    const tableData = {
        ...detail,
        maxMemory: `${CommonConverter.convertByte(detail.maxMemory, 'MB')} MB`,
        maxCpuTime: `${CommonConverter.convertMillisecond(detail.maxCpuTime, 'SEC')} 초`,
        possibleLanguage: detail.languages.map(({ name }) => name).join(', ') ?? '',
    }

    return (
        <div ref={problemDetailRef}>
            <div>
                <span className='rounded-md bg-blue-500 px-15 py-10 text-white'>{detail.id}번 문제</span>
            </div>
            <h1 className='mt-30 mb-30 text-3xl font-semibold'>{detail.title}</h1>
            <div className='mb-30'>
                <BaseTable
                    rowKey={(row) => row.id}
                    dataSource={[{ ...tableData, id: detail.id }]}
                    columns={TABLE_COLUMN_LIST}
                    pagination={false}
                />
            </div>
            <ProblemBody contentHtml={detail.context} />
        </div>
    )
}

export default ProblemDetail
