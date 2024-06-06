import React, { useContext, useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import styled from '@emotion/styled'
import { QueryResult } from '../components'
import { Layout } from '../components'
import { colors, SearchRoundedSmallIcon } from '../styles'
import { InputAdornment, TextField } from '@mui/material'
import { UserCard } from '../container'
import { searchString } from '../utils'
import { UserContext } from '../context'
import { GET_USERS } from '../utils'

const Search = () => {
    const [filteredUsers, setFilteredUsers] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const { loading, error, data, refetch } = useQuery(GET_USERS)
    const currentUser = useContext(UserContext)

    useEffect(() => {
        if (data) {
            const result = data.users.filter(
                (u) =>
                    (searchString(u.username, searchTerm) ||
                        searchString(u.bio, searchTerm)) &&
                    u.id !== currentUser.id
            )
            setFilteredUsers([...result])
        } else {
            setFilteredUsers([])
        }
    }, [data, searchTerm])

    // TODO: Extract the content inside the <QueryResult> into a separate file, e.g., SearchDetails to achieve consistent ui pattern.
    //  ? WHY: Achieve separate of concern
    //  ?    <Page> component should only query and pass the data to its child components via <QueryResult>
    //  ?    Children component should only display query data, or if execute any mutation, should redirect back to the parent component

    return (
        <Layout grid>
            <QueryResult loading={loading} error={error} data={data}>
                <Container>
                    {/* Page Title = Search*/}
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
                            onChange={(e) => {
                                setSearchTerm(e.currentTarget.value)
                            }}
                        />
                    </SearchBar>
                    {/* List of account with Follow button */}
                    {filteredUsers.length > 0 &&
                        filteredUsers.map((u) => (
                            <UserCard
                                key={u.id}
                                user={u}
                                refetchUsers={refetch}
                            />
                        ))}
                    {filteredUsers.length === 0 && (
                        <FallbackContainer>
                            <FallbackTitle>
                                No results available at this time
                            </FallbackTitle>
                            <FallbackDescription>
                                There are no results to show at this time. Try
                                another keyword.
                            </FallbackDescription>
                        </FallbackContainer>
                    )}
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

const FallbackContainer = styled.div({
    border: `1px solid ${colors.grey.lighter}`,
    borderTop: 'none',
    borderRadius: '0 0 30px 30px',
    backgroundColor: colors.white,
    padding: '1.5rem 2rem',
    textAlign: 'center',
    width: '100%',
})

const FallbackTitle = styled.h3({
    fontSize: '1.25rem',
})

const FallbackDescription = styled.p({
    color: colors.grey.light,
    fontSize: '.875rem',
})
