import styles from './List.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
const cx = classNames.bind(styles)

function Header({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <button className={cx('header-back-btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <p className={cx('header-title')}>{title}</p>
        </header>
    )
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func,
}
export default Header
