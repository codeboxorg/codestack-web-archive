import classNames from 'classnames/bind'
import style from './index.module.scss'
const cx = classNames.bind(style)

const Landing = () => {
  return (
    <>
      <div className={cx('box', 'colorBlue')}>Landing</div>
      <div className="w-200 h-200 bg-red-500">Landing</div>
    </>
  )
}

export default Landing
