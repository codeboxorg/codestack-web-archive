import { PaginationBar, BaseTable } from '@components/core/common'
import { useSubmissionList } from '@hooks/submission'
import { ColumnsType } from 'antd/es/table'
import { NextSeo } from 'next-seo'
import usePagination from 'react-use-pagination-hook'
import { Tag } from 'antd'
import Link from 'next/link'
import { Converter } from '@utils/convert'
import { useRouter } from 'next/router'

type SubmissionRow = Submission
type SubmissionColumns = ColumnsType<SubmissionRow>

function SubmissionResultTag({ status }: { status: SubmissionStatus }) {
    if (status === 'QU') return <Tag color='yellow'>대기중</Tag>
    if (status === 'AC') return <Tag color='green'>정답</Tag>
    if (status === 'WA') return <Tag color='red'>오답</Tag>
    if (status === 'CE') return <Tag color='red'>컴파일 오류</Tag>
    if (status === 'PE') return <Tag color='yellow'>출력 형식 다름</Tag>
    if (status === 'TLE') return <Tag color='red'>시간 초과</Tag>
    if (status === 'MLE') return <Tag color='red'>메모리 초과</Tag>
    if (status === 'OLE') return <Tag color='yellow'>값 출력 초과</Tag>
    return <Tag color='red'>런타임 에러</Tag>
}

const columns: SubmissionColumns = [
    {
        title: '제출 번호',
        dataIndex: 'id',
        key: 'id',
        render: (id: SubmissionRow['id']) => <Link href={`/submission/${id}`}>{id}</Link>,
    },
    {
        title: '문제',
        dataIndex: 'problem',
        key: 'problem',
        render: (problem: SubmissionRow['problem']) => <Link href={`/problem/${problem.id}`}>{problem.name}</Link>,
    },
    {
        title: '제출자',
        dataIndex: 'member',
        key: 'member',
        render: (member: SubmissionRow['member']) => <Link href={`/member/${member.id}`}>{member.id}</Link>,
    },
    {
        title: '언어',
        dataIndex: 'language',
        key: 'language',
        render: (e) => e.name,
    },
    {
        title: '메모리 사용',
        dataIndex: 'maxMemoryUsage',
        key: 'maxMemoryUsage',
        render: (e) => Converter.convertByte(e, 'KB'),
    },
    {
        title: '실행 시간',
        dataIndex: 'maxCpuTime',
        key: 'maxCpuTime',
    },
    {
        title: '제출 결과',
        dataIndex: 'status',
        key: 'status',
        render: (status: SubmissionRow['status']) => <SubmissionResultTag status={status} />,
    },
]

function SubmissionPage() {
    const paginationMethods = usePagination({ numOfPage: 5 })
    const router = useRouter()
    const { currentPage, setTotalPage } = paginationMethods
    const currentServerPageIndex = currentPage - 1

    const { data: submissionListPagination } = useSubmissionList(currentServerPageIndex, {
        onSuccess({ totalElements }) {
            setTotalPage(totalElements)
        },
    })

    return (
        <>
            <NextSeo title='제출 근황' />
            <div className='pt-50'>
                <BaseTable
                    className='border-1 border-neutral-200 rounded-md px-1'
                    rowClassName='cursor-pointer'
                    rowKey={(row) => row.id}
                    dataSource={submissionListPagination?.content ?? []}
                    columns={columns}
                    pagination={false}
                    onRow={(record, rowIndex) => ({
                        onClick: (event) => router.push(`/submission/${record.id}`), // click row
                    })}
                />
                <div className='flex justify-center w-full py-30'>
                    <PaginationBar {...paginationMethods} />
                </div>
            </div>
        </>
    )
}

const pagePermission: PagePermissionInfo = {
    redirect: '/sign-in',
}

SubmissionPage.permission = pagePermission

export default SubmissionPage
