import { useIsMutating } from '@tanstack/react-query'
import { Button, ButtonProps } from 'antd'

interface LoadableButtonProps extends ButtonProps {
    mutationKey: string
}

function LoadableButton({ children, mutationKey, ...props }: LoadableButtonProps) {
    const isLoading = Boolean(useIsMutating({ mutationKey: [mutationKey] }))

    return (
        <Button loading={isLoading} {...props}>
            {children}
        </Button>
    )
}

export default LoadableButton
