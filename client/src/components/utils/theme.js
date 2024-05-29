// theme.js
import { createTheme } from '@mui/material/styles'

const customTheme = createTheme({
    components: {
        MuiDialog: {
            styleOverrides: {
                paper: {
                    borderRadius: '25px',
                },
            },
        },
        MuiMenuItem: {},
    },
})

export default customTheme
