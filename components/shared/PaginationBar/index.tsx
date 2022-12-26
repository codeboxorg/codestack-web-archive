import { usePaginationReturn } from 'react-use-pagination-hook'

const PaginationBar = ({
  goBeforeSection,
  goBefore,
  pagelist,
  currentPage,
  setPage,
  goNext,
  goNextSection,
}: usePaginationReturn) => {
  return (
    <>
      <button onClick={() => goBeforeSection()}>{'<<'}</button>
      <button onClick={() => goBefore()}>{'<'}</button>
      {pagelist.map((page, idx) => (
        <button
          className={currentPage === page ? 'text-blue-500' : ''}
          onClick={() => setPage(page)}
          key={idx}
        >
          {page}
        </button>
      ))}
      <button onClick={() => goNext()}>{'>'}</button>
      <button onClick={() => goNextSection()}>{'>>'}</button>
    </>
  )
}

export default PaginationBar
