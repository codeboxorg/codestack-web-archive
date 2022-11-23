import classNames from 'classnames/bind'
import style from './index.module.scss'
const cx = classNames.bind(style)

const Landing = () => {
  return <div className={cx('box', 'colorBlue')}>Landing</div>
}

export default Landing
