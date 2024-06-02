import { useProblemList } from '@hooks/problem'
import { NextSeo } from 'next-seo'
import usePagination from 'react-use-pagination-hook'
import { PaginationBar, BaseTable } from '@components/core/common'
import { Percentage } from '@utils/percentage'
import { ColumnsType } from 'antd/es/table'
import { useRouter } from 'next/router'

interface ProblemRow extends Problem {
    acceptPer: string
}

const tableColumns: ColumnsType<ProblemRow> = [
    {
        title: '문제 번호',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: '문제 제목',
        dataIndex: 'name',
        key: 'name',
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
        title: '정답률',
        dataIndex: 'acceptPer',
        key: 'acceptPer',
    },
]

function ProblemPage() {
    const paginationMethods = usePagination({ numOfPage: 5 })
    const { currentPage, setTotalPage } = paginationMethods

    const currentServerPageIndex = currentPage - 1

    const { data: problemListPagination } = useProblemList(currentServerPageIndex, {
        onSuccess({ totalElements }) {
            setTotalPage(totalElements)
        },
    })
    const router = useRouter()

    const tableData = problemListPagination?.content.map((problem) => ({
        ...problem,
        acceptPer: `${Percentage.comparePercentage(problem.submission, problem.accepted).toFixed(2)}%`,
    }))

    const handleRowAction = (row: ProblemRow) => ({
        onClick: () => router.push(`/problem/${row.id}`),
    })

    return (
        <>
            <NextSeo title='문제 목록' />
            <div className='pt-50'>
                <BaseTable
                    rowClassName='cursor-pointer'
                    onRow={handleRowAction}
                    rowKey={(row) => row.id}
                    dataSource={tableData}
                    columns={tableColumns}
                    pagination={false}
                />
                <div className='w-full flex justify-center py-30'>
                    <PaginationBar {...paginationMethods} />
                </div>
            </div>
        </>
    )
}

export default ProblemPage
