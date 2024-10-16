import MovieTile from ".";
import image from '../../assets/bohemian-rhapsody.png'

export default {
    component: MovieTile
}

export const ShowMovieTile = {
    args: {
        selectMovie: () => {},
        details: {
            id: '001',
            name: 'Bohemian Rhapsody',
            releaseYear: '2018',
            image: image,
            genres: ['Drama', 'Biography', 'Music'],
            duration: '2hrs',
            description: 'Lorem ipsum..............',
            rating: '9.0'
        }
    }
}
