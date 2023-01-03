import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind'
import Menu, { MenuItem } from './Menu'
import config from '~/config/config'
import {
    HomeIcon,
    LiveICon,
    FollowingIcon,
    HomeActiveIcon,
    LiveActiveICon,
    FollowingActiveIcon,
} from '~/components/Icons/Icons'
import LoginAno from '~/components/LoginAnother'
import SuggestAccounts from '~/components/SuggestAccounts'
const cx = classNames.bind(styles)

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={config.routers.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                ></MenuItem>
                <MenuItem
                    title="Following"
                    to={config.routers.following}
                    icon={<FollowingIcon />}
                    activeIcon={<FollowingActiveIcon />}
                ></MenuItem>
                <MenuItem
                    title="Live"
                    to={config.routers.live}
                    icon={<LiveICon />}
                    activeIcon={<LiveActiveICon />}
                ></MenuItem>
            </Menu>
            <LoginAno />

            <SuggestAccounts label="Suggested accounts" />
        </aside>
    )
}
export default Sidebar
