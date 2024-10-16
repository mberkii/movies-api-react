import './style.css'

import Button from '../../common/button'
import Input from '../../common/input'

const SearchForm = ({placeholderText}) => {
	const onSubmit = (event) => {
		event.preventDefault()
	}

    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <Input attributes={{placeholder: placeholderText}} />
                <Button text="search" />
            </form>
        </div>
    )
}

export default SearchForm