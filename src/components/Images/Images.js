import classNames from 'classnames'
import { forwardRef, useState } from 'react'
import styles from './Images.module.scss'
import images from '~/assets/imgs'
import PropTypes from 'prop-types'
const Images = forwardRef(
    (
        { src, alt, className, falseback: customfalseback = images.noimage, ...props },
        ref,
    ) => {
        const [falseback, setFalseBack] = useState('')
        const handleError = () => {
            setFalseBack(customfalseback)
        }
        return (
            <img
                className={className}
                ref={ref}
                alt={alt}
                src={falseback || src}
                {...props}
                onError={handleError}
            />
        )
    },
)

Images.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    falseback: PropTypes.string.isRequired,
    customfalseback: PropTypes.string.isRequired,
}
export default Images
