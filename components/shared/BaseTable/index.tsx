import { Table, TableProps } from 'antd'
import { CSSProperties } from 'react'

function BaseTable<RowType extends Record<string, any>>({ style, ...props }: TableProps<RowType>) {
    const defaultStyle: CSSProperties = {
        minWidth: '500px',
    }
    return (
        <div className='overflow-x-scroll border-1 border-neutral-200 rounded-md'>
            <Table<RowType> style={{ ...defaultStyle, ...style }} {...props} />
        </div>
    )
}

export default BaseTable
