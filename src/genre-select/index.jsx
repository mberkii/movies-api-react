import './style.css'

const GenreSelect = ({genres, selected, onClick}) => {
    return (
        <div>
            <h2>Genre select</h2>
            <p className="genre-container">
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
            </p>
        </div>
    )
}

export default GenreSelect
