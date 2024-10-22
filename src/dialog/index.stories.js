import Dialog from "."
import MovieForm from "../movie-form"
import DeleteNote from "../delete-note"

const mockMovieData = {
    id: '005',
    name: 'Reservoir Dogs',
    releaseDate: '1992-01-01',
    image: require('../assets/reservoir-dogs.png'),
    genres: ['Oscar Winning Movie'],
    duration: '2hrs',
    description: 'Lorem ipsum..............',
    rating: '9.0'
}

export default {
    component: Dialog
}

export const AddMovie = {
    args: {
        title: "Add movie",
        content: <MovieForm />,
        onClose: () => {}
    }
}

export const EditMovie = {
    args: {
        title: "Edit movie",
        content: <MovieForm details={mockMovieData} />,
        onClose: () => {}
    }
}

export const DeleteMovie = {
    args: {
        title: "Delete movie",
        content: <DeleteNote />,
        onClose: () => {}
    }
}
