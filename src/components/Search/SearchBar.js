import { Box, Container, TextField } from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchBar = ({ handleFilter }) => {
    return (
        <Container>
            <Box
                sx={{
                    border: '1px solid #b0b3b8',
                    borderRadius: '15px',
                    width: '100%',
                }}
            >
                <TextField
                    variant="standard"
                    required
                    id="username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    InputProps={{
                        startAdornment: (
                            <Search
                                sx={{ color: '#b0b3b8', margin: '0 .5rem' }}
                            />
                        ),
                        disableUnderline: true,
                    }}
                    sx={{ padding: '.3rem 1rem ', width: '95%' }}
                    onChange={(e) => {
                        handleFilter(e.target.value)
                    }}
                />
            </Box>
        </Container>
    )
}

export default SearchBar
