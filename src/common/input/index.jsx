import './style.css'

import React from 'react'
import PropTypes from 'prop-types'

const Input = ({name, attributes, labelText}) => {
    return (
        <>
            {labelText && <label htmlFor={name}>{labelText}</label>}
            <input id={name} name={name} {...attributes} className="input" />
        </>
    )
}

Input.propTypes = {
    name: PropTypes.string,
    attributes: PropTypes.object,
    labelText: PropTypes.string
}

export default Input
