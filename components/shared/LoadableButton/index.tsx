import { useIsMutating } from '@tanstack/react-query'
import { Button, ButtonProps } from 'antd'

type LoadableButtonProps = ButtonProps & { mutationKey: string }

function LoadableButton({ children, mutationKey, ...props }: LoadableButtonProps) {
    const isMutating = Boolean(useIsMutating({ mutationKey: [mutationKey] }))
    return (
        <Button loading={isMutating} {...props}>
            {children}
        </Button>
    )
}

export default LoadableButton
