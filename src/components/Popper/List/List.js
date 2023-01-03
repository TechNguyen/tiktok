import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import styles from './List.module.scss'
import { Wrapper as PopperWrapper } from '~/components/Popper/Popper'
import ListItem from './ListItem'
import Header from './Header'
import { useState } from 'react'
import PropTypes from 'prop-types'
const cx = classNames.bind(styles)
const defaultFunct = () => {}
function List({ children, items = [], onChange = defaultFunct, onlycontent }) {
    const [history, setHistory] = useState([{ data: items }])
    const curent = history[history.length - 1]
    const renderitem = () => {
        return curent.data.map((item, index) => {
            const isParent = !!item.children
            return (
                <ListItem
                    data={item}
                    key={index}
                    className={cx('header-more_item')}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children])
                        } else {
                            onChange(item)
                        }
                    }}
                />
            )
        })
    }
    const handleBackMenu = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1))
    }
    const renderResult = (attrs) => (
        <div className={cx('header-more_list')} tabIndex="-1" {...attrs}>
            <PopperWrapper flex>
                {history.length > 1 && (
                    <Header title="Language" onBack={handleBackMenu} />
                )}
                {renderitem()}
            </PopperWrapper>
        </div>
    )
    const handleRefeshToFirstPage = () => {
        setHistory((prev) => prev.slice(0, 1))
    }
    return (
        <Tippy
            interactive
            placement="bottom-end"
            delay={[200, 450]}
            hideOnClick={true}
            render={renderResult}
            onHide={handleRefeshToFirstPage}
            content={onlycontent}
        >
            {children}
        </Tippy>
    )
}
List.propTypes = {
    children: PropTypes.node,
    items: PropTypes.array,
    onChange: PropTypes.func,
    onlycontent: PropTypes.elementType,
}
export default List
