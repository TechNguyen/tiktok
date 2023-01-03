import styles from './SuggestAccounts.module.scss'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import AccountItems from './AccountItems'
const cx = classNames.bind(styles)

function SuggestAccounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItems />
            <p className={cx('handle-btn')}>See all</p>
            <p className={cx('handle-btn')}>See less</p>
        </div>
    )
}
SuggestAccounts.propTypes = {
    label: PropTypes.string.isRequired,
}
export default SuggestAccounts
