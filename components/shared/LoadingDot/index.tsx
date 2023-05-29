import classNames from 'classnames/bind'
import style from './index.module.scss'

const cx = classNames.bind(style)

function LoadingDot() {
    return (
        <div className={cx('loading', 'all:bg-blue-600')}>
            <div />
            <div />
            <div />
            <div />
        </div>
    )
}

export default LoadingDot
