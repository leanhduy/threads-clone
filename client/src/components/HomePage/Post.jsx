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
import { useTheme } from '@emotion/react'
import NoImagePlaceHolder from './NoImagePlaceHolder'

const Post = ({ post }) => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
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
                            src={post.author.avatarURL}
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

export default Post
