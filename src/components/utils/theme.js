// theme.js
import { createTheme } from '@mui/material/styles'

const customTheme = createTheme({
    components: {
        MuiMenu: {
            styleOverrides: {
                paper: {
                    borderRadius: '25px',
                },
            },
        },
    },
})

export default customTheme
