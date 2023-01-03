import styles from './Button.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
const cx = classNames.bind(styles)
function Button({
    href,
    to,
    onClick,
    children,
    outline = false,
    primary = false,
    login = false,
    large = false,
    small = false,
    outlineCircle = false,
    uptop = false,
    holdLogin,
    primarybtn,
    ...passProps
}) {
    let Comp = 'button'
    const props = {
        onClick,
        outline,
        small,
        ...passProps,
    }
    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }
    const classes = cx('wrapper', {
        primary,
        login,
        outline,
        small,
        large,
        outlineCircle,
        holdLogin,
        primarybtn,
    })
    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    )
}
Button.propTypes = {
    children: PropTypes.node,
    href: PropTypes.string,
    to: PropTypes.string,
    onClick: PropTypes.func,
    outline: PropTypes.bool,
    primary: PropTypes.bool,
    login: PropTypes.bool,
    large: PropTypes.bool,
    small: PropTypes.bool,
    outlineCircle: PropTypes.bool,
    uptop: PropTypes.bool,
    primarybtn: PropTypes.bool,
    holdLogin: PropTypes.string,
}
export default Button
