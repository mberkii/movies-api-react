import './App.css'

import {useState} from 'react'

import Counter from './counter'
import SearchForm from './search-form'
import GenreSelect from './genre-select'

const genres = [
	{id: '000', name: 'all'},
	{id: '001', name: 'documentary'},
	{id: '002', name: 'horror'},
	{id: '003', name: 'crime'},
	{id: '004', name: 'comedy'},
	{id: '005', name: 'romance'}
]

function App() {
    const [selected, setSelected] = useState(genres[0].name);

	const onSelect = (event) => {
		event.preventDefault()
		setSelected(event.target.dataset.name)
	}

	const onSearch = (event, setResult) => {
		event.preventDefault()

		const inputEl = event.target.querySelector('input')

		setResult(inputEl.value)
		inputEl.value = ''
	}

  	return (
		<div className="App">
			<Counter initialValue={0} />
			<SearchForm initialValue="Initial search query" handleSubmit={onSearch} />
			<GenreSelect
				genres={genres}
				selected={selected}
				onClick={onSelect}
			/>
		</div>
  	)
}

export default App
