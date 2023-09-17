import { Input, InputProps, InputRef } from 'antd'
import React from 'react'
import 'twin.macro'

const BaseInput = React.forwardRef((props: InputProps, ref?: React.Ref<InputRef>) => (
    <Input ref={ref} {...props} tw='py-8 rounded-md text-sm outline-none focus:ring-0! border-neutral-300' />
))

BaseInput.displayName = 'BaseInput'

export default BaseInput
