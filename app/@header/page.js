'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import SearchForm from './components/SearchForm'

import '../../src/components/header/style.css'

const Header = () => {
    const pathname = usePathname()
    const id = pathname.split('/')[1]    

    return (
        <>
            <p className='color-red mb-1'><b>netflix</b>roulette</p>
            <div className="btns-wrap">
                <Link href="/new" className="add-btn">+ Add movie</Link>
            </div>
            {!id && (
                <div className='movie-search'>
                    <h1>Find your movie</h1>
                    <SearchForm placeholderText="What do you want to watch?" />
                </div>
            )}
        </>
    )
}

export default Header
