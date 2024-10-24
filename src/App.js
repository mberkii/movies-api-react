import './App.css'

import { Outlet } from 'react-router-dom'

import MoviesList from './components/movies-list'

function App() {
  	return (
		<>
			<div className="App">
				<MoviesList />
				<footer><p className='color-red text-center'><b>netflix</b>roulette</p></footer>
			</div>
			<Outlet />
		</>
  	)
}

export default App
