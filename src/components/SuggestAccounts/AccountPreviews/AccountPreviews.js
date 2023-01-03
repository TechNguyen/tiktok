import styles from './AccountPreviews.module.scss'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import Images from '~/components/Images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '~/components/Button'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
const cx = classNames.bind(styles)

function AccountPreviews() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('account-wrapper')}>
                <Images
                    className={cx('account-avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/a187c4dfa896a5ea449a4c5d3927b20a~c5_100x100.jpeg?x-expires=1672372800&x-signature=kIwjlqqnGTqFI5zyssavocQnrnU%3D"
                    alt="do mixi"
                />
                <Button primarybtn={true}>Follow</Button>
            </div>
            <div className={cx('account-infor')}>
                <h4 className={cx('account-name')}>
                    <strong>Do mixi</strong>
                    <FontAwesomeIcon
                        icon={faCircleCheck}
                        className={cx('account-icon')}
                    />
                </h4>
                <p className={cx('account-username')}>mixigmaing</p>
                <span className={cx('account-analytics')}>
                    <strong className={cx('account-value')}>10M</strong>
                    <p className={cx('account-label')}>Followers</p>
                    <strong className={cx('account-value')}>10M</strong>
                    <p className={cx('account-label')}>Likes</p>
                </span>
            </div>
        </div>
    )
}
export default AccountPreviews
