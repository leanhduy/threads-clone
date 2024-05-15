import Post from './Post'
import { useFetch } from '../../hooks/useFetch'
import { postsAPI } from '../../data/localDb'
import { Typography } from '@mui/material'

// TODO: replace with real database api endpoint, this is the mock data on local json-server

const ThreadList = () => {
    const { data: posts, error } = useFetch(postsAPI)

    return (
        <>
            {posts !== null ? (
                posts.map((p) => {
                    return <Post key={p.post_id} post={p} />
                })
            ) : (
                <Typography variants="h1" color="error">
                    {error}
                </Typography>
            )}
        </>
    )
}

export default ThreadList
