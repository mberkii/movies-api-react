export const formatRuntime = (runtime) => {
    const runtimeBy60 = Number(runtime) / 60;
    const hours = Math.floor(runtimeBy60);
    const minutes = Math.round((runtimeBy60 - hours) * 60);

    return `${hours}h ${minutes}m`
}

const makeApiCall = async (url) => {
    const response = await fetch(url)
    return await response.json()
}

export const getMoviesData = async (criteria) => {
    if (!criteria.searchBy) {
        criteria.searchBy = criteria.query ? 'title' : 'genres'
    }

    const searchQueries = Object.entries(criteria)
        .filter((param) => param[1])
        .map((param) => ['query', 'genre'].includes(param[0]) ? ['search', param[1]].join('=') : param.join('='))
        .join('&')

    return makeApiCall(`http://localhost:4000/movies?${searchQueries}&sortOrder=asc`)
}
