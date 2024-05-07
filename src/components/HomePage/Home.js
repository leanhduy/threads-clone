import { useContext, useState } from 'react'
import CreateNewDialog from './CreateNewDialog'
import CreateNew from './CreateNew'
import { NewThreadContext } from '../context/context'
import SwitchModeButton from './SwitchModeButton'
import { switchModeButtonStyle } from '../utils/customStyles'
import ThreadList from './ThreadList'
import { useOutletContext } from 'react-router-dom'

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
