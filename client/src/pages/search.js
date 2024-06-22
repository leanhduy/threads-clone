import React, { useEffect, useRef, useState } from 'react'
import { useQuery } from '@apollo/client'
import styled from '@emotion/styled'
import { Layout } from '../components'
import { colors, SearchRoundedSmallIcon } from '../styles'
import { InputAdornment, TextField } from '@mui/material'
import { UserCard } from '../container'
import { GET_USERS, GET_USER_BY_ID, searchString } from '../utils'

const Search = () => {
    // * Top-level states / variables
    // ? The number of users to be skip in the next user fetching query
    const [skip, setSkip] = useState(0)
    // ? The element to detect to load more users
    const fetchMoreRef = useRef()
    // ? The list of users
    const [users, setUsers] = useState([])
    // ? The list of filtered users based on the search term
    const [filteredUserResult, setFilteredUserResult] = useState([])
    // ? Search term
    const [searchTerm, setSearchTerm] = useState('')
    // ? Fetch the list of users
    const { data } = useQuery(GET_USERS, {
        variables: {
            skip: skip,
        },
    })

    // ? Fetch the current logged-in user (Temporary implementation)
    const { data: loggedInUser } = useQuery(GET_USER_BY_ID, {
        variables: {
            id: 1,
        },
    })

    // * Side-effects
    useEffect(() => {
        // ? Update the filtered list of users based on the inputted search term
        if (loggedInUser != null && data != null) {
            let filteredUsers = []
            if (users.length === 0) {
                filteredUsers = data.users.users.filter(
                    (u) => u.id !== loggedInUser.userById.id
                )
                setUsers(filteredUsers)
            } else {
                filteredUsers = [...users, ...data.users.users].filter(
                    (u) => u.id !== loggedInUser.userById.id
                )
                setUsers(filteredUsers)
            }
        }
    }, [loggedInUser, data])

    // ? Leverage the Intersection Observer API to fetch more users in infinite scroll
    useEffect(() => {
        setFilteredUserResult(users)
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            if (entry.isIntersecting) {
                if (data) {
                    setSkip(data.users.cursorId)
                    // setSkip(users.length)
                }
            }
        })
        if (fetchMoreRef.current) {
            observer.observe(fetchMoreRef.current)
        }

        return () => {
            if (fetchMoreRef.current) {
                observer.unobserve(fetchMoreRef.current)
            }
        }
    }, [users])

    useEffect(() => {
        setFilteredUserResult(
            users.filter(
                (u) =>
                    searchString(u.username, searchTerm) ||
                    searchString(u.bio, searchTerm)
            )
        )
    }, [searchTerm])

    // * JSX
    return (
        <Layout grid>
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
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.currentTarget.value)
                        }}
                    />
                </SearchBar>
                {/* List of account with Follow button */}
                {filteredUserResult.length > 0 &&
                    filteredUserResult.map((u) => (
                        <UserCard
                            key={u.id}
                            user={u}
                            loggedInUser={loggedInUser?.userById}
                        />
                    ))}
                {/* UI Element to trigger the infinite scroll fetching*/}
                <FetchMorePlaceHolder ref={fetchMoreRef}></FetchMorePlaceHolder>
                {filteredUserResult.length === 0 && searchTerm !== '' ? (
                    <FallbackContainer>
                        <FallbackTitle>
                            No results available at this time
                        </FallbackTitle>
                        <FallbackDescription>
                            There are no results to show at this time. Try
                            another keyword.
                        </FallbackDescription>
                    </FallbackContainer>
                ) : (
                    ''
                )}
            </Container>
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
    fontWeight: 600,
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

const FetchMorePlaceHolder = styled.p({
    margin: 0,
    width: '100%',
    height: '.1px',
})
