import './style.css'

import React from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import Input from '../../common/input'
import Button from '../../common/button'

import { useMoviesContext } from '../../contexts'
import { addMovie, updateMovie } from '../../utils'

const MovieForm = () => {
    const {id} = useParams()
    const {genres, moviesData} = useMoviesContext()

    const location = useLocation()
	const navigate = useNavigate()
    const previousUrl = [location.state?.previousLocation?.pathname, location.state?.previousLocation?.search].join('')
    const validationRules = { required: true }
    
    const movies = moviesData?.data
    const details = movies?.find((movie) => movie.id === Number(id))

    const {register, handleSubmit, reset} = useForm({
        defaultValues: {
            title: details?.title,
            release_date: details?.release_date,
            poster_path: details?.poster_path,
            vote_average: details?.vote_average,
            genres: details?.genres,
            runtime: details?.runtime,
            overview: details?.overview
        }
    })

    const onSubmit = async (values) => {
        values.release_date = values.release_date.toISOString().split('T')[0]

        details?.id ? await updateMovie({id: details.id, ...values}) : await addMovie(values)
        navigate(previousUrl)
        navigate(0)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex space-between gap-4 mb-1">
                <div className="flex-2">
                    <Input
                        labelText="Title"
                        attributes={register('title', validationRules)}
                    />
                </div>
                <div className="flex-1_3">
                    <Input
                        labelText="Release date"
                        attributes={{type: 'date', ...register('release_date', {valueAsDate: true, ...validationRules})}}
                    />
                </div>
                
            </div>
            <div className="d-flex space-between gap-4 mb-1">
                <div className="flex-2">
                    <Input
                        labelText="Movie image url"
                        attributes={register('poster_path', validationRules)}
                    />
                </div>
                <div className="flex-1_3">
                    <Input
                        labelText='Rating'
                        attributes={{type: 'number', step: '0.1', ...register('vote_average', {valueAsNumber: true, ...validationRules})}}
                    />
                </div>
            </div>
            <div className="d-flex space-between gap-4 mb-1">
                <div className="flex-2">
                    <label htmlFor="genre">Genre</label>
                    <select id="genre" className="w-100" multiple {...register('genres', validationRules)}>
                        {genres.map((genre) =>
                            <option
                                key={genre.id}
                                value={genre.name}
                                >
                                    {genre.name}
                                </option>)}
                    </select>
                </div>
                <div className="flex-1_3">
                    <Input
                        labelText="Runtime"
                        attributes={{type: 'number', ...register('runtime', {valueAsNumber: true, ...validationRules})}}
                    />
                </div>
            </div>
            <div className="d-flex mb-3">
                <label htmlFor="overview">Overview</label>
                <textarea id="overview" {...register('overview', validationRules)} />
            </div>
            <div className="btns-wrap">
                <Button text="Reset" onClick={() => reset()} inverseStyle={true} />
                <Button text="Submit" />
            </div>
        </form>
    )
}

export default MovieForm
