import { ComponentProps } from 'react'
import 'twin.macro'

type Props = ComponentProps<'label'>

function FieldLabel({ children, ...rest }: Props) {
    return (
        <label tw='block mb-5 text-sm font-medium text-gray-900' {...rest}>
            {children}
        </label>
    )
}

export default FieldLabel
