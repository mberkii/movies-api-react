import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { MoviesProvider } from './contexts'
import MovieDetails from './components/movie-details';
import MovieForm from './components/movie-form';
import Dialog from './components/dialog';
import DeleteNote from './components/delete-note';



const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/:id',
				element: <MovieDetails />,
				children: [
					{
						path: 'edit',
						element: <Dialog title="Edit movie" content={<MovieForm />} />
					},
					{
						path: 'delete',
						element: <Dialog title="Delete movie" content={<DeleteNote />} />
					}
				]
			},
			{
				path: '/new',
				element: <Dialog title="Add movie" content={<MovieForm />} />
			}
		]
	}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<MoviesProvider>
			<RouterProvider router={router} />
		</MoviesProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
