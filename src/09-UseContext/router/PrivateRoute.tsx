import { use, type FC, type JSX } from "react"
import { UserContext } from "../context/UserContext"
import { Navigate } from "react-router"

interface PrivateRouteProps {
    element: JSX.Element,
}
export const PrivateRoute: FC<PrivateRouteProps> = ({ element }) => {
    const {
        authenticatedStatus,
    } = use(UserContext)
    if (authenticatedStatus === 'checking') {
        return <div>Loading...</div>
    }
    if (authenticatedStatus === "authenticated") {
        return element
    }
    if (authenticatedStatus === 'not-authenticated') {
        return <Navigate to="/login" replace />
    }
    return (
        <>
        </>
    )
}
