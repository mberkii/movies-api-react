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
    const searchQueries = Object.entries(criteria)
        .filter((param) => param[1])
        .map((param) => param.join('='))
        .join('&')

    return makeApiCall(`http://localhost:4000/movies?${searchQueries}&sortOrder=asc`)
}
