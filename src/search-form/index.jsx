import './style.css'

import {useState} from 'react'

import Button from '../common/button'
import Input from '../common/input'

const SearchForm = () => {
    const [result, setResult] = useState('Initial search query')

    const onSearch = (event) => {
        event.preventDefault()

        const inputEl = event.target.querySelector('input')

        setResult(inputEl.value)
        inputEl.value = ''
    }

    return (
        <div>
            <h2>Search form</h2>
            <form onSubmit={onSearch} className="form">
                <Input defaultValue={result} />
                <Button text="search" />
            </form>
            <p>{result}</p>
        </div>
    )
}

export default SearchForm