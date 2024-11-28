'use client'

import { useRouter } from 'next/navigation'

import '../../../src/components/sort-control/style.css'

const SortControl = ({queries}) => {
    const router = useRouter()
    const defaultValue = queries?.sortBy

    const onChange = (event) => {
        queries.sortBy = event.target.value
    
        const searchQueries = Object.keys(queries).map((key) => `${key}=${queries[key]}`).join('&')

        router.push(`/?${searchQueries}`)
    }

    return (
        <div className='d-flex align-center space-between sort-control'>
            <p>Sort by</p>
            <select onChange={onChange} defaultValue={defaultValue}>
                <option value="title">Title</option>
                <option value="release_date">Release date</option>
            </select>
        </div>
    )
}

export default SortControl
