import './style.css'

const GenreSelect = ({genres, selected, onClick}) => {
    return (
        <div className="d-flex space-between genre-container">
            {genres.map((genre) =>
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
