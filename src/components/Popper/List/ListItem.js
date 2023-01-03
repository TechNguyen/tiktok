import Button from '~/components/Button/Button'
import classNames from 'classnames/bind'
import styles from './List.module.scss'
import PropTypes from 'prop-types'
import { useState } from 'react'
const cx = classNames.bind(styles)
function ListItem({ data, onClick }) {
    const [dark, setDark] = useState('')
    const handleDarkMode = (e) => {
        console.log(e.target)
        // localStorage.getItem('backGround')
    }
    return (
        <Button href={data.to} className={cx('list-button-item', {})} onClick={onClick}>
            {data.src ? (
                <img src={data.src} alt={data.title} className={cx('header-img')} />
            ) : (
                <></>
            )}
            {data.title}
            {data.title === 'Dark mode' ? (
                <button className={cx('button-dark')}>
                    <span
                        // onClick={handleDarkMode}
                        className={cx('button-dark_navgiation')}
                    ></span>
                </button>
            ) : (
                <></>
            )}
        </Button>
    )
}
ListItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
}
export default ListItem
