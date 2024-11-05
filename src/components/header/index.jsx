import React from 'react'
import { useLocation, useParams, Link, Outlet } from 'react-router-dom'

import SearchForm from '../search-form'

import './style.css'

const Header = () => {
    const {id} = useParams()
    const location = useLocation()

    return (
        <header className='header'>
            <p className='color-red mb-1'><b>netflix</b>roulette</p>
            <div className="btns-wrap">
                <Link to="/new" className="add-btn" state={{previousLocation: location}}>+ Add movie</Link>
            </div>
            {!id && (
                <div className='movie-search'>
                    <h1>Find your movie</h1>
                    <SearchForm placeholderText="What do you want to watch?"/>
                </div>
            )}
            <Outlet />
        </header>
    )
}

export default Header