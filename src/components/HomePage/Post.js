import Image from 'mui-image'
import { MoreHorizIcon } from '../utils/icons'
import {
    Avatar,
    Box,
    Grid,
    IconButton,
    Typography,
    useMediaQuery,
} from '@mui/material'
import {
    ChatBubbleOutline,
    FavoriteBorder,
    RepeatOutlined,
    SendOutlined,
} from '@mui/icons-material'
import { convertTimeUnit } from '../utils/helpers'
import { useFetch } from '../../hooks/useFetch'
import { usersAPI } from '../../data/localDb'
import { useEffect } from 'react'
import { useTheme } from '@emotion/react'

const Post = ({ post }) => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const { data: author, error } = useFetch(
        `${usersAPI}?user_id=${post.author}`
    )
    useEffect(() => {}, [author])
    return (
        <Box
            sx={{
                flexGrow: 1,
                margin: '2rem auto 1rem',
            }}
        >
            {post && (
                <Grid container spacing={1}>
                    <Grid item xs={3} sm={3} md={2} lg={2}>
                        <Avatar
                            sx={{ margin: '0 auto', width: 48, height: 48 }}
                            src={
                                author == null
                                    ? `/images/placeholder_avatar.png`
                                    : author.length === 0
                                    ? `/images/placeholder_avatar.png`
                                    : author[0].avatarURL
                            }
                        />
                    </Grid>
                    <Grid item xs={9} sm={9} md={10} lg={10}>
                        <Box
                            sx={{
                                columnGap: 1,
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <Typography variant="body1" fontWeight="bold">
                                {author == null
                                    ? `user`
                                    : author.length === 0
                                    ? `user`
                                    : author[0].user_name}
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: '#b0b3b8',
                                    flexGrow: 1,
                                    fontSize: '0.85rem',
                                }}
                            >
                                {convertTimeUnit(post.upload_timestamp)}
                            </Typography>
                            <MoreHorizIcon style={{ fontSize: '1.5rem' }} />
                        </Box>

                        <Box>
                            <Typography variant="body2">
                                {post.post_body}
                            </Typography>
                            {post.post_images &&
                                post.post_images.map((url) => (
                                    <Image
                                        key={url}
                                        src={url}
                                        layout={
                                            isMobile
                                                ? 'responsive'
                                                : 'intrinsic'
                                        }
                                        width={isMobile ? '100%' : '80%'}
                                        sx={{ borderRadius: '10px' }}
                                    />
                                ))}
                        </Box>

                        <Box sx={{ display: 'flex', width: '60px' }}>
                            <IconButton
                                edge="start"
                                aria-label="add"
                                sx={{ color: 'black', mr: '1rem' }}
                            >
                                <FavoriteBorder
                                    sx={{
                                        fontSize: '1.5rem',
                                        color: 'black',
                                        mr: '.25rem',
                                    }}
                                />
                                <Typography variant="body2">
                                    {post.likes_count}
                                </Typography>
                            </IconButton>
                            <IconButton
                                edge="start"
                                aria-label="add"
                                sx={{ color: 'black', mr: '1rem' }}
                            >
                                <ChatBubbleOutline
                                    sx={{
                                        fontSize: '1.5rem',
                                        color: 'black',
                                        mr: '.25rem',
                                    }}
                                />
                                <Typography variant="body2">
                                    {post.reply_count}
                                </Typography>
                            </IconButton>
                            <IconButton
                                edge="start"
                                aria-label="add"
                                sx={{ color: 'black', mr: '1rem' }}
                            >
                                <RepeatOutlined
                                    sx={{
                                        fontSize: '1.5rem',
                                        color: 'black',
                                        mr: '.25rem',
                                    }}
                                />
                                <Typography variant="body2">
                                    {post.repost_count}
                                </Typography>
                            </IconButton>
                            <IconButton
                                edge="start"
                                aria-label="add"
                                sx={{ color: 'black', mr: '1rem' }}
                            >
                                <SendOutlined
                                    sx={{
                                        fontSize: '1.5rem',
                                        color: 'black',
                                        mr: '.25rem',
                                    }}
                                />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
            )}
        </Box>
    )
}

export default Post
