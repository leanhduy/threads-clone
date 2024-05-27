import Post from './Post'
import { mockPosts } from '../../data/localDb'
import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'

const PostList = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        setPosts([...mockPosts])
    }, [])

    return (
        <>
            {posts !== null ? (
                posts.map((p) => {
                    if (p.isComment) {
                        return <></>
                    }
                    return <Post key={p.id} post={p} />
                })
            ) : (
                <Typography variants="h1" color="error">
                    {'Something wrong'}
                </Typography>
            )}
        </>
    )
}

export default PostList
