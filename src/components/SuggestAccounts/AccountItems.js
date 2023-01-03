import PropTypes from 'prop-types'
import styles from './SuggestAccounts.module.scss'
import classNames from 'classnames/bind'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import Images from '../Images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Wrapper as PopperWrapper } from '~/components/Popper/Popper'
import Tippy from '@tippyjs/react'
import AccountPreviews from './AccountPreviews'
const cx = classNames.bind(styles)
function AccountItems({ src, nickname, username }) {
    const preview = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreviews />
                </PopperWrapper>
            </div>
        )
    }
    return (
        <Tippy interactive render={preview} delay={[800, 0]} placement="bottom">
            <div className={cx('accountWrapper')}>
                <Images
                    className={cx('account-avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/a187c4dfa896a5ea449a4c5d3927b20a~c5_100x100.jpeg?x-expires=1672372800&x-signature=kIwjlqqnGTqFI5zyssavocQnrnU%3D"
                    alt="do mixi"
                />
                <div className={cx('account-infor')}>
                    <h4 className={cx('account-name')}>
                        Do mixi
                        <FontAwesomeIcon
                            icon={faCircleCheck}
                            className={cx('account-icon')}
                        />
                    </h4>
                    <p className={cx('account-username')}>mixigmaing</p>
                </div>
            </div>
        </Tippy>
    )
}

AccountItems.propTypes = {
    src: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
}

export default AccountItems
