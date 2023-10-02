import { Input, InputProps, InputRef } from 'antd'
import React from 'react'
import { Field, FieldError } from 'react-hook-form'
import 'twin.macro'

interface Props extends Omit<InputProps, 'error'> {
    error: FieldError | boolean | undefined
}

const BaseInput = React.forwardRef((props: Props, ref?: React.Ref<InputRef>) => (
    <Input
        ref={ref}
        {...props}
        status={props.error ? 'error' : ''}
        tw='py-8 rounded-md text-sm outline-none focus:ring-0! border-neutral-300'
    />
))

BaseInput.displayName = 'BaseInput'

export default BaseInput
