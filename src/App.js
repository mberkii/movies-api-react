import './App.css'

import Counter from './counter'
import SearchForm from './search-form'
import GenreSelect from './genre-select'

function App() {
  return (
    <div className="App">
      <Counter initialValue={0} />
      <SearchForm />
      <GenreSelect />
    </div>
  )
}

export default App
