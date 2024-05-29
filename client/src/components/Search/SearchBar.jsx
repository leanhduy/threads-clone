import { Autocomplete, Container, TextField, Box } from '@mui/material'
import { Search } from '@mui/icons-material'
import SearchResult from './SearchResult'
import { useEffect, useState } from 'react'
import { usersAPI } from '../../data/localDb'

const SearchBar = () => {
    const [open, setOpen] = useState(false)
    const [error, setError] = useState(null)
    const [inputValue, setInputValue] = useState('')
    const [users, setUsers] = useState([])

    async function fetchUsers() {
        setError(null)
        try {
            let res = await fetch(`${usersAPI}?user_name_like=${inputValue}`)
            let data = await res.json()
            setUsers([...data])
        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [inputValue])

    return (
        <Container
            sx={{
                alignItems: 'center',
                display: 'flex',
                border: '1px solid #b0b3b8',
                borderRadius: '15px',
                width: '100%',
            }}
        >
            <Box>
                <Search sx={{ color: '#b0b3b8' }} />
            </Box>
            <Autocomplete
                open={open}
                onOpen={() => {
                    if (inputValue) {
                        setOpen(true)
                    }
                }}
                onClose={() => {
                    setOpen(false)
                }}
                inputValue={inputValue}
                onInputChange={(e, value) => {
                    setInputValue(value)
                    // Only open when inputValue is not empty after the user typed something
                    if (!value) {
                        setOpen(false)
                    }
                }}
                disablePortal
                id="combo-box-demo"
                forcePopupIcon={false}
                options={users}
                getOptionLabel={(option) => option.user_name}
                renderInput={(params) => <TextField {...params} />}
                renderOption={(props, option) => <SearchResult user={option} />}
                noOptionsText="No user founded"
                sx={{
                    width: '100%',
                    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline':
                        {
                            border: 'none',
                        },
                }}
            />
        </Container>
    )
}

export default SearchBar
