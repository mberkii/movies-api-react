import React from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'
import FocusTrap from 'focus-trap-react'

import './style.css'

const Dialog = ({title, content}) => {
	const navigate = useNavigate()
	const onClose = () => navigate('/')

    return (
        <>
            {createPortal(
                <FocusTrap>
                    <div id='dialog'>
                        <div className='dialog-content'>
                            <h1>{title}</h1>
                            {content}
                            <button className='close-btn' onClick={onClose}>&#10006;</button>
                        </div>
                    </div>
                </FocusTrap>
                , document.body
            )}
        </>
    )
}

export default Dialog
