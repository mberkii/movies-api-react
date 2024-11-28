import Input from '../../../src/common/input'
import Button from '../../../src/common/button'

import '../../../src/components/search-form/style.css'

const SearchForm = ({placeholderText}) => {
    return (
        <div>
            <form className="form">
                <Input attributes={{placeholder: placeholderText}} name="query" />
                <Button text="search" />
            </form>
        </div>
    )
}

export default SearchForm
