export const formatRuntime = (runtime) => {
    const runtimeBy60 = Number(runtime) / 60;
    const hours = Math.floor(runtimeBy60);
    const minutes = Math.round((runtimeBy60 - hours) * 60);

    return `${hours}h ${minutes}m`
}

const makeApiCall = async (url, method, data) => {
    try {
        const response = await fetch(
            url,
            {
                method: method,
                ...(data && {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data)
                })
            }
        )
    
        if (!response.ok) {
            throw new Error(response.statusText)
        }

        if (response.status === 204) {
            return
        }

        return await response.json()
    } catch (error) {
        console.error(error.message || error)
    }
}

export const getMoviesData = async (criteria) => {
    if (!criteria.searchBy) {
        criteria.searchBy = criteria.query ? 'title' : 'genres'
    }

    const searchQueries = Object.entries(criteria)
        .filter((param) => param[1] && param[1] !== 'all')
        .map((param) => ['query', 'genre'].includes(param[0]) ? ['search', param[1]].join('=') : param.join('='))
        .join('&')

    return makeApiCall(`http://localhost:4000/movies?${searchQueries}&sortOrder=desc`, 'get')
}

export const addMovie = async (data) => {
    return makeApiCall('http://localhost:4000/movies', 'post', data)
}

export const deleteMovie = async (id) => {
    return makeApiCall(`http://localhost:4000/movies/${id}`, 'delete')
}

export const updateMovie = async (data) => {
    return makeApiCall('http://localhost:4000/movies', 'put', data)
}

export const getMovie = async (id) => {
    return makeApiCall(`http://localhost:4000/movies/${id}`, 'get')
}
