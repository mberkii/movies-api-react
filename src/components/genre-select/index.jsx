import './style.css'

import { useSearchParams } from 'react-router-dom'

const GenreSelect = ({genres}) => {
    const [searchParams] = useSearchParams()
    const genresList = [{id: 'all', name: 'all'}, ...genres]
    const selectedGenre = searchParams.get('genre')
    const sortBy = searchParams.get('sortBy')

    return (
        <div className="genre-container">
            {genresList.map((genre) =>
                <a
                    key={genre.id}
                    data-name={genre.name.toLowerCase()}
                    href={`/?sortBy=${sortBy}&searchBy=genres&genre=${genre.name.toLowerCase()}`}
                    className={`genre-link ${genre.name === selectedGenre ? ' active' : ''}`}
                >
                    {genre.name}
                </a>
            )}
        </div>
    )
}

export default GenreSelect
