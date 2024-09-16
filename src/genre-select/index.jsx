import './style.css'

import {useState} from 'react'

const GenreSelect = () => {
    const [active, setActive] = useState('000');

    const genres = [
        {id: '000', name: 'all'},
        {id: '001', name: 'documentary'},
        {id: '002', name: 'horror'},
        {id: '003', name: 'crime'},
        {id: '004', name: 'comedy'},
        {id: '005', name: 'romance'}
    ]

    const onClick = (event) => {
        event.preventDefault()
        setActive(event.target.id)
    }

    return (
        <div>
            <h2>Genre select</h2>
            <p className="genre-container">
                {genres.map((genre) =>
                    <a
                        key={genre.id}
                        id={genre.id}
                        href="/#"
                        className={`genre-link ${genre.id === active ? ' active' : ''}`}
                        onClick={onClick}
                    >
                        {genre.name}
                    </a>
                )}
            </p>
        </div>
    )
}

export default GenreSelect
