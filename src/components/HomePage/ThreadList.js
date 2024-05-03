import { useState, useEffect } from 'react'
import Thread from './Thread'

// TODO: replace with real database api endpoint, this is the mock data on local json-server
const threadsAPI = 'http://localhost:3001/threads'

const ThreadList = () => {
    const [threads, setThreads] = useState([])
    useEffect(() => {
        const fetchThreads = async () => {
            let res = await fetch(threadsAPI)
            if (!res.ok) {
                return []
            } else {
                let data = await res.json()
                setThreads([...data])
            }
        }
        fetchThreads()
    }, [])

    return (
        <>
            {threads.map((t) => {
                return <Thread key={t.id} thread={t} />
            })}
        </>
    )
}

export default ThreadList
