import './style.css'

import React from 'react'
import PropTypes from 'prop-types'

const Button = ({text, onClick, inverseStyle}) => {
    return (
        <button
            type="submit"
            className={`button${inverseStyle ? ' inverse' : ''}`}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    inverseStyle: PropTypes.bool
}

export default Button
