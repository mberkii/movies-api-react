import React from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'

import { deleteMovie } from '../../utils'

import Button from '../../common/button'

const DeleteNote = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const {state: {previousLocation: { pathname, search }}} = useLocation()

    const handleClick = async () => {
        await deleteMovie(id)
        navigate(`${pathname}${search}`)
        navigate(0)
    }

    return (
        <>
            <p className='mb-3'>Are you sure you want to delete this movie?</p>
            <div className="btns-wrap">
                <Button text="Confirm" onClick={handleClick} />
            </div>
        </>
    )
}

export default DeleteNote
