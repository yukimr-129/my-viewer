import { memo, VFC } from "react"
import { Link } from "react-router-dom"

export const PlayerPage: VFC = memo(() => {
    return (
        <>
            <h1>This is Player page!</h1>
            <Link to='/'>Top Page</Link>
        </>
    )
})