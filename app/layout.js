
import "../src/index.css";
import '../src/App.css'

export const metadata = {
  title: "Movies app",
  description: "Check out movies",
};

export default function RootLayout({ children, movies, header }) {
	console.log(children, movies, header)
	return (
		<html lang="en">
		<body className="App">
			<header className='header'>
				{header}
				{children}
			</header>
			{movies}
			<footer><p className='color-red text-center'><b>netflix</b>roulette</p></footer>
		</body>
		</html>
	)
}
