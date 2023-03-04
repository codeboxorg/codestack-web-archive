import classNames from 'classnames'
import { usePaginationReturn } from 'react-use-pagination-hook'

const PaginationBar = ({
  pageList,
  goNextSection,
  goBeforeSection,
  goNext,
  goBefore,
  setPage,
  currentPage,
}: usePaginationReturn) => {
  return (
    <div className="flex gap-5 all:rounded-md p-10">
      <button
        className="h-35 w-35 hover:bg-neutral-100 transition-all duration-300"
        onClick={() => goBeforeSection()}
      >
        {'<<'}
      </button>
      <button
        className="h-35 w-35 hover:bg-neutral-100 transition-all duration-300"
        onClick={() => goBefore()}
      >
        {'<'}
      </button>
      <ul className="flex gap-5 all:cursor-pointer all:h-35 all:w-35">
        {pageList.map((page) => (
          <li
            onClick={() => setPage(page)}
            className={classNames(
              'flex justify-center items-center transition-all duration-300',
              page === currentPage
                ? 'border-1 border-blue-500 text-blue-500'
                : 'hover:bg-neutral-100'
            )}
            key={page}
          >
            {page}
          </li>
        ))}
      </ul>
      <button
        className="h-35 w-35 hover:bg-neutral-100 transition-all duration-300"
        onClick={() => goNext()}
      >
        {'>'}
      </button>
      <button
        className="h-35 w-35 hover:bg-neutral-100 transition-all duration-300"
        onClick={() => goNextSection()}
      >
        {'>>'}
      </button>
    </div>
  )
}

export default PaginationBar
