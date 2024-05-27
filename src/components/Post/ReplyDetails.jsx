import {
    Avatar,
    Box,
    Grid,
    IconButton,
    Typography,
    useMediaQuery,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { mockPosts } from '../../data/localDb'
import { convertTimeUnit } from '../utils/helpers'
import { MoreHorizIcon } from '../utils/icons'
import { useTheme } from '@emotion/react'
import Image from 'mui-image'
import NoImagePlaceHolder from '../HomePage/NoImagePlaceHolder'
import {
    ChatBubbleOutline,
    FavoriteBorder,
    RepeatOutlined,
    SendOutlined,
} from '@mui/icons-material'

const ReplyDetails = () => {
    const theme = useTheme()
    const params = useParams()
    const [post, setPost] = useState(null)
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    useEffect(() => {
        let result = mockPosts.find((p) => p.id === params.id)
        console.log(result)
        setPost({ ...result })
    }, [])

    return (
        <Box
            sx={{
                flexGrow: 1,
                margin: '2rem auto 1rem',
            }}
        >
            {post && (
                <Grid container spacing={1}>
                    <Grid item xs={1} sm={1} md={1} lg={1}>
                        <Avatar
                            sx={{ margin: '0 auto', width: 48, height: 48 }}
                            src={post.author.avatarURL}
                        />
                    </Grid>
                    <Grid item xs={11} sm={11} md={11} lg={11}>
                        <Box
                            sx={{
                                columnGap: 1,
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <Typography variant="body1" fontWeight="bold">
                                {post.author.user_name}
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
                                        showLoading
                                        src={url}
                                        layout={
                                            isMobile
                                                ? 'responsive'
                                                : 'intrinsic'
                                        }
                                        width={isMobile ? '100%' : '80%'}
                                        sx={{ borderRadius: '10px' }}
                                        errorIcon={<NoImagePlaceHolder />}
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

export default ReplyDetails
