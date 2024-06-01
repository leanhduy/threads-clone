import styled from '@emotion/styled'
import React from 'react'
import { Link } from 'react-router-dom'
import {
    ChatBubbleOutlineRoundedIcon,
    LikeIcon,
    MoreHorizIcon,
    RepostIcon,
    SendRoundedIcon,
    colors,
} from '../styles'
import { Button, IconButton } from '@mui/material'
import { formatDistanceToNowStrict } from 'date-fns'
import { Image } from 'mui-image'

const Post = ({ post }) => {
    const { id, body, createdAt, author, postImages, likeCount, replyCount } =
        post
    return (
        <Content>
            <ContentSide>
                <PostAvatarImage
                    src={author?.profileImage?.url}
                    alt="user avatar"
                />
            </ContentSide>
            <ContentMain>
                <ContentMainHeader>
                    <Title>{author.username}</Title>
                    <Subtitle>
                        {formatDistanceToNowStrict(new Date(createdAt))}
                    </Subtitle>
                </ContentMainHeader>
                <ContentMainBody>
                    <LinkContainer to={'/search'}>
                        {body}
                        {postImages?.map((i) => (
                            <PostImage key={i.id} src={i.url} />
                        ))}
                    </LinkContainer>
                </ContentMainBody>
                <ContentMainFooter>
                    <PostAction startIcon={<LikeIcon />}>
                        {likeCount}
                    </PostAction>
                    <PostAction startIcon={<ChatBubbleOutlineRoundedIcon />}>
                        {replyCount}
                    </PostAction>
                    <PostAction startIcon={<RepostIcon />} />
                    <PostAction startIcon={<SendRoundedIcon />} />
                </ContentMainFooter>
            </ContentMain>
            <ContentSide>
                <IconButton>
                    <MoreHorizIcon />
                </IconButton>
            </ContentSide>
        </Content>
    )
}

export default Post

const LinkContainer = styled(Link)({
    color: colors.black,
    cursor: 'pointer',
    textDecoration: 'none',
})

const Content = styled.div({
    border: `1px solid ${colors.grey.lighter}`,
    borderBottom: 'none',
    backgroundColor: colors.white,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    columnGap: '.5rem',
    padding: '1.5rem 2rem',
    width: '100%',
    minWidth: 'auto',
    overflowX: 'auto',
})

const ContentSide = styled.div({})

const ContentMain = styled.div({
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    rowGap: '.5rem',
    wordBreak: 'break-word',
})

const ContentMainHeader = styled.div({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    columnGap: '.5rem',
})

const ContentMainBody = styled.div({
    display: 'flex',
    flexDirection: 'column',
})

const ContentMainFooter = styled.div({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
})

const PostAvatarImage = styled.img({
    borderRadius: '50%',
    objectFit: 'cover',
    width: 40,
    height: 40,
    filter: 'grayscale(60%)',
})

const PostImage = styled.img({
    margin: '1rem 0',
    maxWidth: '70%',
    height: 'auto',
})

const Title = styled.h5({})

const Subtitle = styled.span({
    color: colors.grey.light,
    fontSize: '.875rem',
})

const PostAction = styled(Button)({
    color: colors.black.base,
    whiteSpace: 'nowrap',
    height: '2rem',
})

const ImageContainer = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyItems: 'flex-start',
    width: '100%',
})
