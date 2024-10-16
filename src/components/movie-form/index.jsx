import './style.css'

import React from 'react'

import Input from '../../common/input'
import Button from '../../common/button'

import { useMoviesContext } from '../../contexts'

const MovieForm = ({details, onSubmit}) => {
    const {genres} = useMoviesContext()
    const defaultGenre = genres.find((genre) => details?.genres?.map((genre) => genre.toLowerCase()).includes(genre.name))

    const resetForm = (event) => {
        event.preventDefault()
        event.currentTarget.parentElement.parentElement.reset()
    }

    return (
        <form onSubmit={(event) => onSubmit(event, details?.id)}>
            <div className="d-flex space-between gap-4 mb-1">
                <div className="flex-2">
                    <Input
                        name="title"
                        type="text"
                        labelText="Title"
                        attributes={{type: 'text', defaultValue: details?.name}}
                    />
                </div>
                <div className="flex-1_3">
                    <Input
                        name="date"
                        labelText="Release date"
                        attributes={{type: 'date', defaultValue: details?.releaseDate}}
                    />
                </div>
                
            </div>
            <div className="d-flex space-between gap-4 mb-1">
                <div className="flex-2">
                    <Input
                        name="url"
                        labelText="Movie image url" 
                        attributes={{type: 'text', defaultValue: details?.image}}
                    />
                </div>
                <div className="flex-1_3">
                    <Input
                        name="rating"
                        labelText='Rating'
                        attributes={{type: 'text', defaultValue: details?.rating}}
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
                        attributes={{type: 'text', defaultValue: details?.duration}}
                    />
                </div>
            </div>
            <div className="d-flex mb-3">
                <label htmlFor="overview">Overview</label>
                <textarea id="overview" name="overview" defaultValue={details?.description} />
            </div>
            <div className="btns-wrap">
                <Button text="Reset" onClick={resetForm} inverseStyle={true} />
                <Button text="Submit" />
            </div>
        </form>
    )
}

export default MovieForm
