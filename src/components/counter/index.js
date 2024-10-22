import './style.css'

import {createElement, useState} from 'react'
import PropTypes from 'prop-types'

const Counter = ({initialValue}) => {
    const [value, setValue] = useState(initialValue)

    const increment = () => setValue(value+1)
    const decrement = () => setValue(value-1)

    return createElement(
        'div',
        null,
        createElement('h2', null, 'Counter'),
        createElement(
            'p',
            {className: 'counter'},
            createElement('span', null, value),
            createElement('button', {onClick: increment}, '+1'),
            createElement('button', {onClick: decrement}, '-1')
        )
    )
}

Counter.propTypes = {initialValue: PropTypes.number}

export default Counter
