import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { usePaginationReturn } from 'react-use-pagination-hook'
import VPaginationBar from './VPaginationBar'

const VAC = dynamic(import('react-vac'), { ssr: false })

const PaginationBar = ({ pagelist, setPage, ...rest }: usePaginationReturn) => {
  const vPaginationBarProps = {
    ...rest,
    pagelist: pagelist.map((page) => ({
      page,
      handlePageClick: () => {
        setPage(page)
      },
    })),
  }

  return (
    <>
      <VPaginationBar />
      <Suspense>
        <VAC
          name="VPaginationBar"
          data={vPaginationBarProps}
          useList="pagelist"
        />
      </Suspense>
    </>
  )
}

export default PaginationBar
