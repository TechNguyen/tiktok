import classNames from 'classnames/bind'
// import GlobalStyles from '~/components/GlobalStyles'
import 'tippy.js/dist/tippy.css'
import Tippy from '@tippyjs/react'
import styles from './Header.module.scss'
import images from '~/assets/imgs'
import List from '~/components/Popper/List/List'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import Button from '~/components/Button/Button'
import { UploadIcon } from '~/components/Icons/Icons'
import Image from '~/components/Images/Images'
import SearchHeader from '../Search/Search'
import { Link } from 'react-router-dom'
import config from '~/config/config'
const cx = classNames.bind(styles)
function Header() {
    const handleOnchange = (item) => {
        console.log(item)
    }
    const curentUser = false
    const list_item = [
        {
            src: images.lang,
            title: 'Language',
            children: {
                title: 'English',
                data: [
                    {
                        code: 'en',
                        title: 'English',
                        type: 'language',
                    },
                    {
                        code: 'vn',
                        title: 'Tiếng Việt',
                        type: 'language',
                    },
                ],
            },
        },
        { src: images.feedback, title: 'Feedback and help', to: './feedback' },
        { src: images.key, title: 'Keyboard and shortcuts' },
        { src: images.dark, title: 'Dark mode' },
    ]

    // user-menu
    const user_Menu = [
        { src: images.profile, title: 'View profile', to: '/@ly' },
        { src: images.getcoin, title: 'Get Coin', to: './getcoin' },
        { src: images.live, title: 'LIVE Studio', to: './live' },
        { src: images.setting, title: 'Setting', to: 'setting' },
        ...list_item,
        { src: images.login, title: 'Log out', separate: true },
    ]
    return (
        <header className={cx('wrapper')}>
            <div className={cx('header-inner')}>
                <Link to={config.routers.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>
                <SearchHeader />
                <div className={cx('header-action')}>
                    <Tippy interactive content="Upload-file" delay={[10, 450]}>
                        <Button primary href="./upload" login>
                            <UploadIcon width="3.2rem" />
                            Upload
                        </Button>
                    </Tippy>
                    {curentUser ? (
                        <div className={cx('curent-user')}>
                            <Tippy
                                content="Message"
                                placement="bottom"
                                delay={[100, 300]}
                            >
                                <Link to>
                                    <Image
                                        src={images.message}
                                        alt="message"
                                        className={cx('curent-user_message', {
                                            'user-action': true,
                                        })}
                                    />
                                </Link>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom" delay={[100, 300]}>
                                <Image
                                    src={images.inbox}
                                    alt="inbox"
                                    className={cx('curent-user_inbox', {
                                        'user-action': true,
                                    })}
                                />
                            </Tippy>
                            <Tippy hideOnClick={false}>
                                <List items={user_Menu} onChange={handleOnchange}>
                                    <Image
                                        src={images.avatar}
                                        alt="avatar"
                                        className={cx('curent-user-avatar', {
                                            'curent-action': true,
                                        })}
                                    />
                                </List>
                            </Tippy>
                        </div>
                    ) : (
                        <>
                            <Button primary href="./login" login holdLogin>
                                Log in
                                <FontAwesomeIcon
                                    icon={faRightToBracket}
                                    className={cx('header-logo_login')}
                                />
                            </Button>
                            <List items={list_item} onChange={handleOnchange}>
                                <img
                                    src={images.moreicon}
                                    alt="more"
                                    className={cx('header-more')}
                                />
                            </List>
                        </>
                    )}
                </div>
            </div>
        </header>
    )
}
export default Header
