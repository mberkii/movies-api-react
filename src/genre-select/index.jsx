import './style.css'

const GenreSelect = ({genres, selected, onClick}) => {
    return (
        <div className="genre-container">
            {genres.map((genre) =>
                <a
                    key={genre.id}
                    data-name={genre.name}
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
