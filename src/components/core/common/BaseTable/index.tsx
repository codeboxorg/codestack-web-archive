import { Table, TableProps } from 'antd'
import tw from 'twin.macro'

const defaultStyle = tw`min-w-500`

function BaseTable<RowType extends Record<string, any>>({ style, ...props }: TableProps<RowType>) {
    return (
        <div className='overflow-x-scroll border-1 border-neutral-200 rounded-md'>
            <Table<RowType> style={{ ...defaultStyle, ...style }} {...props} />
        </div>
    )
}

export default BaseTable
