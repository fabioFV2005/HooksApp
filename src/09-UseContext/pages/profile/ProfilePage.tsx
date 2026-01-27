import { UserContext } from "@/09-UseContext/context/UserContext"
import { Button } from "@/components/ui/button"
import { use } from "react"

const ProfilePage = () => {
    const { user, logout } = use(UserContext)
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold">User Profile</h1>
            <hr />
            <pre className="my-4 w-[80%] overflow-x-auto">
                {
                    user ? JSON.stringify(user, null, 2) : 'No user logged in'
                }
            </pre>

            <Button variant='destructive' onClick={logout}>Logout</Button>
        </div>
    )
}

export default ProfilePage
