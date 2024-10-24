import Header from ".";
import image from '../../assets/bohemian-rhapsody.png'

export default {
    component: Header
}

export const ShowSearchBar = {}

export const ShowMovieDetails = {
    args: {
        movieDetails: {
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