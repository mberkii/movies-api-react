import './style.css'

import {useState} from 'react'

import Button from '../common/button'
import Input from '../common/input'

const SearchForm = ({initialValue, handleSubmit}) => {
    const [result, setResult] = useState(initialValue)

    const onSubmit = (event) => handleSubmit(event, setResult)

    return (
        <div>
            <h2>Search form</h2>
            <form onSubmit={onSubmit} className="form">
                <Input defaultValue={initialValue} />
                <Button text="search" />
            </form>
            <p>{result}</p>
        </div>
    )
}

export default SearchForm