import './style.css'

import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import Input from '../../common/input'
import Button from '../../common/button'

import { useMoviesContext } from '../../contexts'
import { formatRuntime } from '../../utils'

const MovieForm = ({onSubmit}) => {
    const {id} = useParams()
    const {genres, moviesData} = useMoviesContext()
    
	const navigate = useNavigate()

    const movies = moviesData?.data
    const details = movies?.find((movie) => movie.id === Number(id))
    const defaultGenre = genres.find((genre) => details?.genres?.map((genre) => genre.toLowerCase()).includes(genre.name))
    const runtime = details?.runtime && formatRuntime(details.runtime)

    const resetForm = (event) => {
        event.preventDefault()
        event.currentTarget.parentElement.parentElement.reset()
    }

    const handleSubmit = (event) => {
        onSubmit(event, details?.id)
        navigate('/')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="d-flex space-between gap-4 mb-1">
                <div className="flex-2">
                    <Input
                        name="title"
                        type="text"
                        labelText="Title"
                        attributes={{type: 'text', defaultValue: details?.title}}
                    />
                </div>
                <div className="flex-1_3">
                    <Input
                        name="date"
                        labelText="Release date"
                        attributes={{type: 'date', defaultValue: details?.release_date}}
                    />
                </div>
                
            </div>
            <div className="d-flex space-between gap-4 mb-1">
                <div className="flex-2">
                    <Input
                        name="url"
                        labelText="Movie image url" 
                        attributes={{type: 'text', defaultValue: details?.poster_path}}
                    />
                </div>
                <div className="flex-1_3">
                    <Input
                        name="rating"
                        labelText='Rating'
                        attributes={{type: 'text', defaultValue: details?.vote_average}}
                    />
                </div>
            </div>
            <div className="d-flex space-between gap-4 mb-1">
                <div className="flex-2">
                    <label htmlFor="genre">Genre</label>
                    <select id="genre" name="genre" className="w-100" defaultValue={defaultGenre?.name}>
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
                        name="time"
                        labelText="Runtime"
                        attributes={{type: 'text', defaultValue: runtime}}
                    />
                </div>
            </div>
            <div className="d-flex mb-3">
                <label htmlFor="overview">Overview</label>
                <textarea id="overview" name="overview" defaultValue={details?.overview} />
            </div>
            <div className="btns-wrap">
                <Button text="Reset" onClick={resetForm} inverseStyle={true} />
                <Button text="Submit" />
            </div>
        </form>
    )
}

export default MovieForm
