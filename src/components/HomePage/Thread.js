import Image from 'mui-image'
import { MoreHorizIcon } from '../utils/icons'
import { Avatar, Box, Grid, IconButton, Typography } from '@mui/material'
import {
    ChatBubbleOutline,
    FavoriteBorder,
    RepeatOutlined,
    SendOutlined,
} from '@mui/icons-material'
import { convertTimeUnit } from '../utils/helpers'

const Thread = ({ thread }) => {
    return (
        <Box
            sx={{
                flexGrow: 1,
                width: '80%',
                margin: '2rem auto 1rem',
            }}
        >
            <Grid container spacing={1}>
                <Grid item xs={1} md={1}>
                    <Avatar src={thread.avatarUrl} />
                </Grid>
                <Grid item xs={11} md={11}>
                    <Box
                        sx={{
                            columnGap: 1,
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant="body1" fontWeight="bold">
                            {thread.author}
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: '#b0b3b8',
                                flexGrow: 1,
                                fontSize: '0.85rem',
                            }}
                        >
                            {convertTimeUnit(thread.timestamp)}
                        </Typography>
                        <MoreHorizIcon style={{ fontSize: '1.5rem' }} />
                    </Box>
                    {/* Thread Content */}
                    <Box>
                        <Typography variant="body2">
                            {thread.content}
                        </Typography>
                        {thread.imageUrl && <Image src={thread.imageUrl} />}
                    </Box>
                    {/* Thread Statistics (Love, Repost, Reply count) */}
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
                                {thread.likesCount}
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
                                {thread.replyCount}
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
                                {thread.repostCount}
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
        </Box>
    )
}

export default Thread
