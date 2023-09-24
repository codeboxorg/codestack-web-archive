import BaseTable from '@components/core/BaseTable'
import { MESSAGE } from '@constants/message'
import { useRootState } from '@hooks/shared'
import CommonConverter from '@utils/convert/CommonConverter'
import { message } from 'antd'
import { useCallback, useEffect, useRef } from 'react'
import { css } from 'twin.macro'

const wrapperStyle = css`
    h1 {
        font-size: x-large;
        font-weight: 600;
        margin-bottom: 10px;
    }

    p {
        margin-bottom: 30px;
    }

    .sample-item {
        width: 100%;
        gap: 15px;
        display: flex;
        margin-top: 35px;
        justify-content: space-between;
        & > div {
            width: 50%;
        }
    }

    .sample-item-header {
        display: flex;
        align-items: center;
        gap: 10px;
        div {
            font-size: large;
            font-weight: 600;
        }
        button {
            border: 1px solid rgb(190, 190, 190);
            border-radius: 5px;
            padding: 2px 10px;
            font-size: small;
        }
    }

    .sample-data {
        margin-top: 10px;
        border-radius: 5px;
        background-color: rgb(244, 244, 244);
        border: 1px solid rgb(190, 190, 190);
        padding: 10px 7px;
        text-align: justify;
        white-space: pre;
        overflow-x: scroll;
    }

    @media only screen and (max-width: 767px) {
        .sample-item {
            display: flex;
            flex-wrap: wrap;
            & > div {
                width: 100%;
            }
        }
    }
`

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
            <section css={wrapperStyle} dangerouslySetInnerHTML={{ __html: detail.context }} />
        </div>
    )
}

export default ProblemDetail
