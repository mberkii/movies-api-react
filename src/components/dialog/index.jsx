import React from 'react'
import { createPortal } from 'react-dom'
import { useNavigate, useLocation } from 'react-router-dom'
import FocusTrap from 'focus-trap-react'

import './style.css'

const Dialog = ({title, content}) => {
	const navigate = useNavigate()
    const {state: {previousLocation: { pathname, search }}} = useLocation();
    const onClose = () => navigate(`${pathname}${search}`)

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
