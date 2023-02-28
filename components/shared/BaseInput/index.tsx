import { Input, InputProps, InputRef } from 'antd'
import React, { CSSProperties } from 'react'

const BaseInput = React.forwardRef(
  ({ style, ...props }: InputProps, ref?: React.Ref<InputRef>) => {
    const defaultStyle: CSSProperties = {
      paddingTop: '8px',
      paddingBottom: '8px',
    }
    return <Input ref={ref} style={{ ...defaultStyle, ...style }} {...props} />
  }
)

export default BaseInput
