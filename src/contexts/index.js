import React, { createContext, useContext, useState, useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'

import { getMoviesData } from '../utils'

const MoviesContext = createContext()

const genres = [
	{id: '000', name: 'Action'},
	{id: '001', name: 'Adventure'},
	{id: '002', name: 'Animation'},
	{id: '003', name: 'Biography'},
	{id: '004', name: 'Comedy'},
	{id: '005', name: 'Crime'},
	{id: '006', name: 'Drama'},
	{id: '007', name: 'Family'},
	{id: '008', name: 'Fantasy'},
	{id: '009', name: 'Music'},
	{id: '010', name: 'Romance'},
	{id: '011', name: 'Science Fiction'}
]

export const MoviesProvider = ({children}) => {
    const [moviesData, setMoviesData] = useState({data: []})
    const [moviesList, setMoviesList] = useState(moviesData.data)

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
        const response = await getMoviesData(criteria)
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

MoviesProvider.propTypes = {
    children: PropTypes.any
}
