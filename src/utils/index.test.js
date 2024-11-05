import {getMoviesData, addMovie, updateMovie, deleteMovie} from "."

test('should get movies data', async () => {
    jest.spyOn(global, 'fetch').mockImplementationOnce(() =>
        Promise.resolve({
            ok: true,
            json: () => Promise.resolve({data: [{}]}),
        })
    );

    expect(await getMoviesData({sortBy: 'title', searchBy: 'genres', genre: 'action'})).toEqual({data: [{}]})
})

test('should add movie', async () => {
    jest.spyOn(global, 'fetch').mockImplementationOnce(() =>
        Promise.resolve({
            ok: true,
            json: () => Promise.resolve({id: 123}),
        })
    );

    expect(await addMovie({title: 'New movie'})).toEqual({id: 123})
})

test('should update movie', async () => {
    jest.spyOn(global, 'fetch').mockImplementationOnce(() =>
        Promise.resolve({
            ok: true,
            status: 204
        })
    );

    expect(await updateMovie({details: 'Movie', id: '123'})).toBeUndefined()
})

test('should delete movie', async () => {
    jest.spyOn(global, 'fetch').mockImplementationOnce(() =>
        Promise.resolve({
            ok: true,
            status: 204
        })
    );

    expect(await deleteMovie('123')).toBeUndefined()
})

test('should throw an error is response is not ok', async () => {
    jest.spyOn(global, 'fetch').mockImplementationOnce(() =>
        Promise.resolve({
            ok: false,
            statusMessage: 'Error'
        })
    );

    console.error = jest.fn()

    await deleteMovie({details: 'Movie'})
    expect(console.error).toHaveBeenCalled()
})
