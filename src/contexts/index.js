import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react'

import { getMoviesData } from '../utils'

const MoviesContext = createContext()

const genres = [
	{id: '000', name: 'action'},
	{id: '001', name: 'adventure'},
	{id: '002', name: 'animation'},
	{id: '003', name: 'biography'},
	{id: '004', name: 'comedy'},
	{id: '005', name: 'crime'},
	{id: '006', name: 'drama'},
	{id: '007', name: 'family'},
	{id: '008', name: 'fantasy'},
	{id: '009', name: 'music'},
	{id: '010', name: 'romance'},
	{id: '011', name: 'science fiction'}
]

export const MoviesProvider = ({children}) => {
    const [sortCriteria, setSortCriteria] = useState({sortBy: 'title', limit: 12})
    const [moviesData, setMoviesData] = useState({data: []})
    const [moviesList, setMoviesList] = useState(moviesData.data)

    const pagination = useRef(false)
    const handleMovieUpdate = (details) => {
        const movieToUpdate = moviesList.find((movie) => movie.id === details.id)

        if (!movieToUpdate) {
            return
        }

        Object.keys(movieToUpdate).forEach((prop) => (movieToUpdate[prop] = details[prop]))
    }

    const handleMovieDelete = (id) => {
        const filteredMovies = moviesList.filter((movie) => movie.id !== id)

        setMoviesList(filteredMovies)
    }

    const value = useMemo(
        () => ({
            genres,
            moviesData,
            searchMovies: (criteria, isPaginationFlow) => {
                pagination.current = isPaginationFlow

                setSortCriteria({...sortCriteria, ...criteria})
            },
            addMovie: (details) => setMoviesList([...moviesList, details]),
            updateMovie: handleMovieUpdate,
            deleteMovie: handleMovieDelete
        }),
        [moviesData]
    )

    useEffect(() => {
        (async() => {
            const response = await getMoviesData(sortCriteria)
            const data = pagination.current && {data: [...moviesData.data, ...response.data]}
            setMoviesData({...response, ...data})
        })()
    }, [sortCriteria])

    return (
        <MoviesContext.Provider value={value}>
            {children}
        </MoviesContext.Provider>
    )
}

export const useMoviesContext = () => useContext(MoviesContext)
