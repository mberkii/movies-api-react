import MovieDetails from ".";
import image from '../../assets/bohemian-rhapsody.png'

export default {
    component: MovieDetails
}

export const ShowMovieDetails = {
    args: {
        details: {
            id: '001',
            title: 'Bohemian Rhapsody',
            release_date: '2018-01-01',
            poster_path: image,
            genres: ['Drama', 'Biography', 'Music'],
            runtime: '200',
            overview: 'Lorem ipsum..............',
            vote_average: '9.0'
        }
    }
}
