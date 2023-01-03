import HeadlessTippy from '@tippyjs/react/headless'
import AccountItem from '~/components/AccountItems/AccountItems'
import classNames from 'classnames/bind'
import { useEffect, useState, useRef } from 'react'
import { Wrapper as PopperWrapper } from '~/components/Popper/Popper'
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Search.module.scss'
import { useDebounce } from '~/hooks'
import * as searchService from '~/service/searchApi'
const cx = classNames.bind(styles)
function SearchHeader() {
    const [value, setValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showSearch, setShowSearch] = useState(true)
    const [loading, setLoading] = useState(false)
    const inputRef = useRef()
    const debounce = useDebounce(value, 500)    
    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([])
            return
        }
        setLoading(true)
        const fetchApi = async () => {
            setLoading(true)
            const result = await searchService.searchService(debounce)
            setSearchResult(result)
            setLoading(false)
        }
        fetchApi()
    }, [debounce])
    const handleClear = () => {
        setValue('')
        setSearchResult([])
        inputRef.current.focus()
    }
    const handleClickoutside = () => {
        setShowSearch(false)
    }
    const handleSpaceValue = (e) => {
        const searchValue = e.target.value
        if (searchValue[0] === ' ') {
            return
        }
        setValue(searchValue)
    }
    const handlePrevent = (e) => {
        e.preventDefault()
    }
    const handleClickFocus = () => {
        inputRef.current.focus()
    }
    return (
        <div>
            <HeadlessTippy
                interactive
                appendTo={() => document.body}
                visible={showSearch && searchResult.length > 0}
                onClickOutside={handleClickoutside}
                render={(attrs) => (
                    <div className={cx('header-search_result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-account')}>Accounts</h4>
                            {searchResult.map((result) => (
                                <AccountItem
                                    key={result.id}
                                    data={result}
                                    onClick={[handleClear, handleClickoutside]}
                                />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('header-search')}>
                    <input
                        ref={inputRef}
                        value={value}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        className={cx('header-input')}
                        onChange={handleSpaceValue}
                        onFocus={() => {
                            setShowSearch(true)
                        }}
                    />

                    {!!value && !loading && (
                        <button className={cx('header-clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && (
                        <FontAwesomeIcon
                            className={cx('header-loading')}
                            icon={faSpinner}
                        />
                    )}
                    <button
                        className={cx('search-btn')}
                        onMouseDown={handlePrevent}
                        onClick={handleClickFocus}
                    >
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            className={cx('search_btn-icon')}
                        />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    )
}
export default SearchHeader
