import { Avatar, Box, Grid, Typography } from '@mui/material'
import { Link, useOutletContext } from 'react-router-dom'
import { convertTimeUnit } from '../utils/helpers'
import { useState, useEffect } from 'react'
import { ReplyIcon } from '../utils/icons'

const Replies = () => {
    //#region HOOKS
    const [activities] = useOutletContext()

    const [replies, setReplies] = useState([])
    useEffect(() => {
        setReplies(activities)
    }, [])
    //#endregion

    return (
        <>
            {replies.map((reply) => (
                <Link
                    to={`/post/${reply.comment.id}`}
                    style={{
                        color: '#000',
                        textDecoration: 'none',
                    }}
                    key={reply.id}
                >
                    <Grid container spacing={1} sx={{ margin: '2rem 0 1rem' }}>
                        <Grid item xs={1} sm={1} md={1} lg={1}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    position: 'relative',
                                }}
                            >
                                <Avatar
                                    sx={{
                                        width: 40,
                                        height: 40,
                                    }}
                                    src={reply.comment.author.avatarURL}
                                />
                                <ReplyIcon
                                    customStyle={{
                                        position: 'absolute',
                                        bottom: '-.3rem',
                                    }}
                                />
                            </Box>
                        </Grid>
                        <Grid
                            item
                            xs={11}
                            sm={11}
                            md={11}
                            lg={11}
                            sx={{
                                alignItems: 'center',
                                borderBottom: '1px solid #b0b3b8',
                                display: 'flex',
                                justifyContent: 'space-between',
                                paddingBottom: '.875rem',
                            }}
                        >
                            <Box
                                sx={{
                                    columnGap: 1,
                                    textAlign: 'start',
                                    width: '100%',
                                }}
                            >
                                <Typography
                                    variant="body1"
                                    sx={{
                                        display: 'inline-block',
                                        color: '#000',
                                        fontWeight: '600',
                                        marginRight: '.375rem',
                                    }}
                                >
                                    {reply.comment.author.user_name}
                                </Typography>
                                <Typography
                                    variant="span"
                                    sx={{ display: 'inline-block' }}
                                >
                                    {convertTimeUnit(
                                        reply.comment.upload_timestamp
                                    )}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: '#a0a0a0',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        width: '100%',
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    {reply.post_body}
                                </Typography>
                                <Typography
                                    variant="span"
                                    sx={{
                                        color: '#000',
                                    }}
                                >
                                    {reply.comment.comment_body}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Link>
            ))}
        </>
    )
}

export default Replies
