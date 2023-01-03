import { Children, ReactNode, TableHTMLAttributes } from 'react'
import classNames from 'classnames/bind'
import style from './index.module.scss'
import uuid from 'react-uuid'

const cx = classNames.bind(style)

type ColumnItem = [string | ReactNode, number]
export type Column = ColumnItem[]

interface Props extends TableHTMLAttributes<HTMLTableElement> {
  children: ReactNode
  column: Column
  theadClassName?: string
  emptyElement?: ReactNode
}

const BaseTable = ({
  children,
  column,
  emptyElement,
  theadClassName,
  ...rest
}: Props) => {
  const isEmptyTableBody = !Children.count(children)
  return (
    <table className={cx('table', 'table-fixed p-0 overflow-hidden')} {...rest}>
      <thead className={cx('tableHead', theadClassName)}>
        <tr>
          {column.map(([title, width]) => (
            <th
              key={uuid()}
              style={{ width: width + '%' }}
              className="text-15 truncate"
            >
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={cx('tableBody', 'all:text-15 all:truncate')}>
        {isEmptyTableBody && emptyElement && (
          <tr>
            <td colSpan={column.length}>
              <div className="py-10">{emptyElement}</div>
            </td>
          </tr>
        )}
        {children}
      </tbody>
    </table>
  )
}

export default BaseTable
