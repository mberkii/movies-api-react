import './style.css'

const GenreSelect = ({genres, selected, onClick}) => {
    const genresList = [{id: 'all', name: 'all'}, ...genres]

    return (
        <div className="genre-container">
            {genresList.map((genre) =>
                <a
                    key={genre.id}
                    data-name={genre.name.toLowerCase()}
                    href="/#"
                    className={`genre-link ${genre.name === selected ? ' active' : ''}`}
                    onClick={onClick}
                >
                    {genre.name}
                </a>
            )}
        </div>
    )
}

export default GenreSelect
