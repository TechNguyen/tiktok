import classNames from 'classnames/bind'
import styles from './LoginAno.module.scss'
const cx = classNames.bind(styles)
function LoginAno() {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('login-title')}>
                Log in to follow creators, like videos, and view comments.
            </h3>
            <button className={cx('login-btn')}>Log in</button>
        </div>
    )
}

export default LoginAno
