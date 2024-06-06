import styled from '@emotion/styled'
import React, { useContext, useEffect, useState } from 'react'
import { Layout } from '../components'
import wip from '../assets/wip.gif'

const Activity = () => {
    return (
        <Layout grid>
            <Container>
                <WorkInProgress src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnc1dm1ub2ZxMnVtbWgxeGcycnk0MzJubXhpMHI5Mm1iZHV0M2twayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QJfCtrknxjcGPnRfMl/giphy.webp" />
            </Container>
        </Layout>
    )
}

export default Activity

const Container = styled.div({
    alignContent: 'center',
    width: '100%',
})

const WorkInProgress = styled.img({
    display: 'block',
    margin: '0 auto',
    maxWidth: '100%',
})
