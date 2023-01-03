import styles from './Menu.module.scss'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const cx = classNames.bind(styles)

function MenuItem({ title, to, icon, activeIcon }) {
    return (
        <NavLink
            end
            to={to}
            className={(nav) => cx('menu_item', { active: nav.isActive })}
        >
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('active-icon')}>{activeIcon}</span>
            <span className={cx('menu-item_title')}>{title}</span>
        </NavLink>
    )
}
MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
}
export default MenuItem
