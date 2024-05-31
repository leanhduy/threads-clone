import React from 'react'
import { Global } from '@emotion/core'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import PostAddRoundedIcon from '@mui/icons-material/PostAddRounded'
import DragHandleRoundedIcon from '@mui/icons-material/DragHandleRounded'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded'
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded'
import SendRoundedIcon from '@mui/icons-material/SendRounded'
import ScreenRotationAltRoundedIcon from '@mui/icons-material/ScreenRotationAltRounded'
import { styled } from '@mui/material/styles'

export const unit = 8
export const widths = {
    largePageWidth: 1600,
    regularPageWidth: 1100,
    textPageWidth: 800,
}

const GlobalStyles = () => (
    <Global
        styles={{
            [['html', 'body']]: {
                height: '100%',
            },
            body: {
                margin: 0,
                padding: 0,
                fontFamily: "'Source Sans Pro', sans-serif",
                backgroundColor: colors.silver.base,
                color: colors.black.base,
            },
            a: {
                color: 'inherit',
            },
            '#root': {
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100%',
            },
            '*': {
                boxSizing: 'border-box',
            },
            [['h1', 'h2', 'h3', 'h4', 'h5', 'h6']]: {
                margin: 0,
                fontWeight: 600,
            },
            h1: {
                fontSize: 40,
                lineHeight: 1,
            },
            h2: {
                fontSize: 36,
            },
            h3: {
                fontSize: 30,
            },
            h5: {
                fontSize: 16,
            },
        }}
    />
)

export const colors = {
    pink: {
        darkest: '#661f4e',
        darker: '#832363',
        dark: '#c43997',
        base: '#f25cc1',
        light: '#ffa3e0',
        lighter: '#ffd4f1',
        lightest: '#ffe6f7',
    },
    teal: {
        darkest: '#1f6664',
        darker: '#1d7b78',
        dark: '#26a29d',
        base: '#41d9d3',
        light: '#8bf6f2',
        lighter: '#c6fffd',
        lightest: '#e6fffe',
    },
    indigo: {
        darkest: '#2d1f66',
        darker: '#311c87',
        dark: '#3f20ba',
        base: '#7156d9',
        light: '#ad9bf6',
        lighter: '#d9cfff',
        lightest: '#ebe6ff',
    },
    black: {
        darker: '#12151A',
        dark: '#14171C',
        base: '#191C23',
        light: '#22262E',
        lighter: '#2F353F',
    },
    grey: {
        darker: '#424855',
        dark: '#5A6270',
        base: '#777F8E',
        light: '#959DAA',
        lighter: '#B2B9C3',
    },
    silver: {
        darker: '#CAD0D8',
        dark: '#DEE2E7',
        base: '#EBEEF0',
        light: '#F4F6F8',
        lighter: '#FCFDFF',
    },
    red: {
        darkest: '#661f1f',
        darker: '#781c1c',
        dark: '#9c2323',
        base: '#d13b3b',
        light: '#f18686',
        lighter: '#ffc3c3',
        lightest: '#ffe6e6',
    },
    green: {
        darkest: '#145e33',
        darker: '#136c38',
        dark: '#1c8448',
        base: '#36ad68',
        light: '#7ed9a4',
        lighter: '#bef4d5',
        lightest: '#e6fff0',
    },
    blue: {
        darkest: '#163c66',
        darker: '#0f417a',
        dark: '#1053a0',
        base: '#2075d6',
        light: '#74b0f4',
        lighter: '#bbdbff',
        lightest: '#f0f7ff',
    },
    orange: {
        darkest: '#663f1f',
        darker: '#884c1e',
        dark: '#b46626',
        base: '#f59140',
        light: '#ffc18f',
        lighter: '#ffe2ca',
        lightest: '#fff1e6',
    },
    yellow: {
        darkest: '#66501f',
        darker: '#84671d',
        dark: '#b48f25',
        base: '#f4d03f',
        light: '#ffe88e',
        lighter: '#fff4ca',
        lightest: '#fffae6',
    },
    purple: {
        darkest: '#421666',
        darker: '#521584',
        dark: '#711eb4',
        base: '#a23df5',
        light: '#cd8fff',
        lighter: '#e8ccff',
        lightest: '#f4e6ff',
    },
    blilet: {
        darkest: '#1B2240',
        darker: '#252E50',
        dark: '#3C4A85',
        base: '#5168C2',
        light: '#7A92F0',
        lighter: '#B0BEF7',
        lightest: '#E6EBFF',
    },
    midnight: {
        darkest: '#060F2F',
        darker: '#1B2240',
        dark: '#383D5B',
        base: '#3D4B6A',
        light: '#566992',
        lighter: '#798FBB',
        lightest: '#B4C3DB',
    },
    white: '#ffffff',
}

export default GlobalStyles

/**
 * ? EXPORT ALL THE MUI-ICONS USED THROUGHOUT THE APP, ADD CUSTOM STYLES IF NEEDED
 */
const StyledHomeRoundedIcon = styled(HomeRoundedIcon)(() => ({
    width: 32,
    height: 32,
}))
const StyledPostAddRoundedIcon = styled(PostAddRoundedIcon)(() => ({}))
const StyledMoreHorizIcon = styled(MoreHorizIcon)(() => ({}))
const StyledSendRoundedIcon = styled(SendRoundedIcon)(() => ({
    color: colors.black.base,
}))
const StyledRepostIcon = styled(ScreenRotationAltRoundedIcon)(() => ({
    color: colors.black.base,
}))
const StyledChatBubbleOutlineRoundedIcon = styled(ChatBubbleOutlineRoundedIcon)(
    () => ({ color: colors.black.base })
)
const StyledDragHandleRoundedIcon = styled(DragHandleRoundedIcon)(() => ({
    width: 32,
    height: 32,
}))
const StyledSearchRoundedIcon = styled(SearchRoundedIcon)(() => ({
    width: 32,
    height: 32,
}))
const StyledBorderColorRoundedIcon = styled(BorderColorRoundedIcon)(() => ({
    width: 32,
    height: 32,
}))
const StyledFavoriteBorderRoundedIcon = styled(FavoriteBorderRoundedIcon)(
    () => ({ width: 32, height: 32 })
)
const StyledPersonOutlineRoundedIcon = styled(PersonOutlineRoundedIcon)(() => ({
    width: 32,
    height: 32,
}))
const StyledLikeIcon = styled(FavoriteBorderRoundedIcon)(() => ({
    color: colors.black.base,
}))

export { StyledHomeRoundedIcon as HomeRoundedIcon }
export { StyledPostAddRoundedIcon as PostAddRoundedIcon }
export { StyledDragHandleRoundedIcon as DragHandleRoundedIcon }
export { StyledSearchRoundedIcon as SearchRoundedIcon }
export { StyledBorderColorRoundedIcon as BorderColorRoundedIcon }
export { StyledFavoriteBorderRoundedIcon as FavoriteBorderRoundedIcon }
export { StyledPersonOutlineRoundedIcon as PersonOutlineRoundedIcon }
export { StyledMoreHorizIcon as MoreHorizIcon }
export { StyledChatBubbleOutlineRoundedIcon as ChatBubbleOutlineRoundedIcon }
export { StyledSendRoundedIcon as SendRoundedIcon }
export { StyledRepostIcon as RepostIcon }
export { StyledLikeIcon as LikeIcon }
