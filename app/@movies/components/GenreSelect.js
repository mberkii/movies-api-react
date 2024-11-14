import Link from 'next/link'

import genres from '../../api/genres.json'

import '../../../src/components/genre-select/style.css'

const GenreSelect = ({queries}) => {
    const genresList = [{id: 'all', name: 'all'}, ...genres]

    return (
        <div className="genre-container">
            {genresList.map((genre) =>
                <Link
                    key={genre.id}
                    data-name={genre.name.toLowerCase()}
                    href={{
                        pathname: '/',
                        query: `searchBy=genres&genre=${genre.name.toLowerCase()}`
                    }}
                    className={`genre-link ${genre.name.toLowerCase() === queries?.genre ? ' active' : ''}`}
                >
                    {genre.name}
                </Link>
            )}
        </div>
    )
}

export default GenreSelect
