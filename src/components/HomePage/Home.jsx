import { useState } from 'react'
import CreateNew from './CreateNew'
import SwitchModeButton from './SwitchModeButton'
import { switchModeButtonStyle } from '../utils/customStyles'
import ThreadList from './ThreadList'

const Home = () => {
    const [followingMode, setFollowingMode] = useState(true)
    const toggleMode = () => {
        setFollowingMode((mode) => !mode)
    }

    return (
        <>
            <CreateNew />
            <ThreadList />
            <SwitchModeButton
                mode={followingMode}
                toggleMode={toggleMode}
                style={switchModeButtonStyle}
            />
        </>
    )
}

export default Home
