import Header from '~/components/Layout/components/Header/Header'
import PropTypes from 'prop-types'
function OnlyHeader({ children }) {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}
OnlyHeader.propTypes = {
    children: PropTypes.element,
}
export default OnlyHeader
