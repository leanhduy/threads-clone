import { useState } from 'react'
import CreateNew from './CreateNew'
import SwitchModeButton from './SwitchModeButton'
import { switchModeButtonStyle } from '../utils/customStyles'
import PostList from './PostList'

const Home = () => {
    const [followingMode, setFollowingMode] = useState(true)

    const toggleMode = () => {
        setFollowingMode((mode) => !mode)
    }

    return (
        <>
            <CreateNew />
            <PostList />
            <SwitchModeButton
                mode={followingMode}
                toggleMode={toggleMode}
                style={switchModeButtonStyle}
            />
        </>
    )
}

export default Home
