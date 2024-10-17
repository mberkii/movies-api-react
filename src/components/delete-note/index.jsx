import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { useMoviesContext } from '../../contexts'

import Button from '../../common/button'

const DeleteNote = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const {deleteMovie} = useMoviesContext()

    const handleClick = () => {
        deleteMovie(id)
        navigate('/')
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
