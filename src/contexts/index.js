import { createContext, useContext, useRef, useState, useCallback, useMemo } from 'react'

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
    const [moviesData, setMoviesData] = useState({data: []})
    const [moviesList, setMoviesList] = useState(moviesData.data)

    const sortCriteria = useRef({})

    const handleMovieUpdate = useCallback((details) => {
        const movieToUpdate = moviesList.find((movie) => movie.id === details.id)

        if (!movieToUpdate) {
            return
        }

        Object.keys(movieToUpdate).forEach((prop) => (movieToUpdate[prop] = details[prop]))
    }, [moviesList])

    const handleMovieDelete = useCallback((id) => {
        const filteredMovies = moviesList.filter((movie) => movie.id !== id)

        setMoviesList(filteredMovies)
    }, [moviesList])

    const handleMovieSearch = useCallback(async(criteria, isPaginationFlow) => {
        sortCriteria.current = {...sortCriteria.current, ...criteria}

        const response = await getMoviesData(sortCriteria.current)
        const data = isPaginationFlow && {data: [...moviesData.data, ...response.data]}
        setMoviesData({...response, ...data})
    }, [moviesData.data])

    const value = useMemo(
        () => ({
            genres,
            moviesData,
            searchMovies: (criteria, isPaginationFlow) => handleMovieSearch(criteria, isPaginationFlow),
            addMovie: (details) => setMoviesList([...moviesList, details]),
            updateMovie: handleMovieUpdate,
            deleteMovie: handleMovieDelete
        }), [moviesData, moviesList, handleMovieDelete, handleMovieSearch, handleMovieUpdate])

    return (
        <MoviesContext.Provider value={value}>
            {children}
        </MoviesContext.Provider>
    )
}

export const useMoviesContext = () => useContext(MoviesContext)
