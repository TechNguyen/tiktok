import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import styles from './AccountItems.module.scss'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Images from '~/components/Images/Images'
import { Link } from 'react-router-dom'
const cx = classNames.bind(styles)
function AccountItem({ data, onClick }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')} onClick={onClick}>
            <Images
                className={cx('account-avatar')}
                src={data.avatar}
                alt={data.full_name || 'undefined'}
            />
            <div className={cx('account-infor')}>
                <h4 className={cx('account-name')}>
                    {data.nickname}
                    <FontAwesomeIcon
                        icon={faCircleCheck}
                        className={cx('account-icon')}
                    />
                </h4>
                <p className={cx('account-username')}>{data.full_name}</p>
            </div>
            <div className={cx('search-progress')}></div>
        </Link>
    )
}
AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
}
export default AccountItem
