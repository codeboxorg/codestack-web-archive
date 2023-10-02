import { ComponentProps, ReactNode } from 'react'
import { FieldError } from 'react-hook-form'
import 'twin.macro'

interface Props extends ComponentProps<'div'> {
    error: FieldError | boolean | undefined
    children: ReactNode
}

function FieldErrorMessage({ error, children, ...rest }: Props) {
    return (
        <div tw='h-20 mt-3 under:text-xs under:text-red-500' {...rest}>
            {Boolean(error) && <p>{children}</p>}
        </div>
    )
}

export default FieldErrorMessage
