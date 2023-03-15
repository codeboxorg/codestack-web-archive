import { useIsMutating } from '@tanstack/react-query'
import { Button, ButtonProps } from 'antd'

type LoadableButtonProps = ButtonProps & { mutationKey: string }

const LoadableButton = ({
  children,
  mutationKey,
  loading,
  ...props
}: LoadableButtonProps) => {
  const isMutating = Boolean(useIsMutating({ mutationKey: [mutationKey] }))
  return (
    <Button loading={isMutating} {...props}>
      {children}
    </Button>
  )
}

export default LoadableButton
