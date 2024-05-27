import { Container, Grid, Paper } from '@mui/material'
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import {
    mockActivityFollows,
    mockActivityMentions,
    mockActivityReplies,
} from '../../data/localDb'
import { Outlet, useNavigate } from 'react-router-dom'

const filters = ['all', 'follows', 'replies', 'mentions', 'quotes', 'reposts']

const Item = styled(Paper)(() => ({
    border: '1px solid #b0b3b8',
    borderRadius: '10px',
    cursor: 'pointer',
    textAlign: 'center',
    fontWeight: 600,
    padding: '.5rem 0',
    textTransform: 'capitalize',
    '& .link': {
        color: '#000',
        backgroundColor: 'transparent',
    },
    '&.active, &.active .link': {
        backgroundColor: '#000',
        color: '#fff',
    },
}))

const Activity = () => {
    const navigate = useNavigate()
    const [selectedFilter, setSelectedFilter] = useState('all')
    const [activities, setActivities] = useState([])

    useEffect(() => {
        // Navigate
        if (selectedFilter === 'all') {
            navigate('/activity')
        } else {
            navigate(`/activity/${selectedFilter}`)
        }
    }, [activities])

    const handleFilterChange = (filterName) => {
        setSelectedFilter(filterName)
        switch (filterName) {
            case 'all':
                setActivities([])
                break
            case 'follows':
                setActivities([...mockActivityFollows])
                break
            case 'replies':
                setActivities([...mockActivityReplies])
                break
            case 'mentions':
                setActivities([...mockActivityMentions])
                break
            default:
                break
        }
    }
    return (
        <>
            {/* Filters */}
            <Grid container spacing={1}>
                {filters.map((f) => (
                    <Grid item key={f} xs={4} sm={3} md={2}>
                        <Item
                            elevation={0}
                            className={selectedFilter === f && 'active'}
                            onClick={() => handleFilterChange(f)}
                        >
                            {f}
                        </Item>
                    </Grid>
                ))}
            </Grid>
            <Container
                sx={{
                    alignContent: activities.length === 0 ? 'center' : 'start',
                    color: '#b0b3b8',
                    marginTop: '0.5rem',
                    minHeight: '80vh',
                    paddingTop: '1rem',
                    textAlign: 'center',
                }}
            >
                <Outlet context={[activities, setActivities]} />
                {activities.length === 0 && <Grid item>No activity yet.</Grid>}
            </Container>
        </>
    )
}

export default Activity
