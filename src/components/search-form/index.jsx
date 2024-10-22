import './style.css'

import Button from '../../common/button'
import Input from '../../common/input'
import { useMoviesContext } from '../../contexts'

const SearchForm = ({placeholderText}) => {
    const {searchMovies} = useMoviesContext()
	const onSubmit = (event) => {
		event.preventDefault()

        const searchQuery = event.currentTarget.search.value

        event.currentTarget.reset()
        searchMovies({
            search: searchQuery,
            searchBy: 'title',
            offset: 0
        })
	}

    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <Input attributes={{placeholder: placeholderText}} name="search" />
                <Button text="search" />
            </form>
        </div>
    )
}

export default SearchForm