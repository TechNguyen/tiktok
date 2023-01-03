import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value)
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounceValue(value)
        }, delay)
        return () => {
            clearTimeout(timeout)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])
    return debounceValue
}
useDebounce.propTypes = {
    value: PropTypes.node.isRequired,
    delay: PropTypes.number.isRequired,
}
export default useDebounce
