import React, { VFC } from 'react'
import { Link } from 'react-router-dom'

export const NotFoundPage: VFC = () => {
    return (
        <>
            <h1>Not Found!</h1>
            <Link to='/'>Top Page</Link>
        </>
    )
}

