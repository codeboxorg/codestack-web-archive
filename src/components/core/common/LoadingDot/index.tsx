import { loadingDotStyle } from './index.style'
import 'twin.macro'

function LoadingDot() {
    return (
        <div css={loadingDotStyle} tw='all:bg-blue-600'>
            <div />
            <div />
            <div />
            <div />
        </div>
    )
}

export default LoadingDot
