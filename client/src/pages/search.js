import React from 'react'
import { gql, useQuery } from '@apollo/client'
import styled from '@emotion/styled'
import { QueryResult } from '../components'
import { Layout } from '../components'
import { colors, SearchRoundedSmallIcon } from '../styles'
import { InputAdornment, TextField } from '@mui/material'
import { UserCard, UserCardPopover } from '../container'

const GET_USERS = gql`
    query Users {
        users {
            id
            username
            fullname
            bio
            followerCount
            profileImage {
                url
            }
        }
    }
`

const Search = () => {
    const { loading, error, data } = useQuery(GET_USERS)

    return (
        <Layout grid>
            <QueryResult loading={loading} error={error} data={data}>
                {/* Page Title = Search*/}
                <Container>
                    <PageTitle>Search</PageTitle>
                    {/* Search Bar */}
                    <SearchBar>
                        <SearchInput
                            label=""
                            placeholder="Search"
                            id="search-input"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment
                                        position="start"
                                        sx={{ color: colors.silver.darker }}
                                    >
                                        <SearchRoundedSmallIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </SearchBar>
                    {/* List of account with Follow button */}
                    {data?.users?.map((u) => (
                        <UserCard key={u.id} user={u} />
                    ))}
                </Container>
            </QueryResult>
        </Layout>
    )
}

export default Search

const Container = styled.div({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
})

const PageTitle = styled.div({
    fontWeight: 'bold',
    marginBottom: '1rem',
    textAlign: 'center',
    width: '100%',
})

const SearchBar = styled.div({
    border: `1px solid ${colors.grey.lighter}`,
    borderBottom: 'none',
    borderRadius: '30px 30px 0 0',
    backgroundColor: colors.white,
    padding: '1.5rem 2rem',
    width: '100%',
})

const SearchInput = styled(TextField)({
    width: '100%',
    '& .MuiInputBase-root': {
        height: '3rem',
        fontSize: '.95rem',
        backgroundColor: colors.silver.base,
        borderRadius: '20px',
        '& .MuiOutlinedInput-notchedOutline': {
            border: `1px solid ${colors.grey.lighter}`,
        },
        '&.Mui-focused,&:hover': {
            '& .MuiOutlinedInput-notchedOutline': {
                border: `.1px solid ${colors.grey.lighter}`,
            },
        },
    },
})
