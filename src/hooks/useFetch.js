import { useEffect, useState } from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    setData(null)
                    setError('Network error')
                }
                const data = await response.json()
                setData(data)
                setError(null)
            } catch (error) {
                setError(error.message)
            }
        }
        fetchData()
    }, [])
    return { data, error }
}
