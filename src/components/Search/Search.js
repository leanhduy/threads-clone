import SearchBar from './SearchBar'
import User from './User'
import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { usersAPI } from '../../data/localDb'
import { formatISO } from 'date-fns'
import { Box } from '@mui/material'

const Search = () => {
    const [users, setUsers] = useState([])
    const [lastItem, setLastItem] = useState(null)
    const [error, setError] = useState(null)
    const [page, setPage] = useState(1)

    useEffect(() => {
        fetchUsers()
    }, [])

    // Logic / Handler
    async function fetchUsers() {
        const url = `${usersAPI}?_page=${page}&_limit=10`
        setError(null)
        try {
            let res = await fetch(url)
            let data = await res.json()
            setUsers((prevUsers) => [...prevUsers, ...data])
            setPage((p) => p + 1)
            setLastItem(data[data.length - 1])
        } catch (error) {
            setError(error)
        }
    }

    function filterBySearchKey(key) {
        let filteredUsers = users.filter((u) => u.user_name.includes(key))
    }

    return (
        <>
            {/* Search bar */}
            <SearchBar handleFilter={filterBySearchKey} />

            <InfiniteScroll
                dataLength={users.length}
                next={fetchUsers}
                hasMore={users.length === 0 || lastItem !== undefined} // Replace with a condition based on your data source
                loader={<p>Loading...</p>}
                endMessage={<p>No more data to load.</p>}
                style={{ overflow: 'none' }}
            >
                {users &&
                    users.map((user) => (
                        <User key={user.user_id} user={user} />
                    ))}
            </InfiniteScroll>
            {error && <p>Error: {error.message}</p>}
        </>
    )
}

export default Search
