import Link from "next/link"

import '../../../src/components/movie-tile/style.css'

const Card = ({details}) => (
    <div className='movie-tile'>
        {details && (
            <Link
                href={`/${details.id}`}
            >
                <img src={details.poster_path} alt={details.title} />
                <div className='d-flex align-center space-between movie-title'>
                    <h3>{details.title}</h3>
                    <span className='movie-year'>{details.release_date?.split('-')[0]}</span>
                </div>
                <p className="movie-genres">{details.genres.join(', ')}</p>
            </Link>
        )}
    </div>
)

export default Card
