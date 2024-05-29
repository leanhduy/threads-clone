import { SyncAlt } from '@mui/icons-material'
import { Button } from '@mui/material'

const SwitchModeButton = ({ mode, toggleMode, style }) => {
    return (
        <Button
            disableRipple
            sx={{ ...style }}
            variant="outlined"
            endIcon={<SyncAlt sx={{ color: '#b0b3b8' }} />}
            onClick={toggleMode}
        >
            {mode ? 'Following' : 'For you'}
        </Button>
    )
}

export default SwitchModeButton
