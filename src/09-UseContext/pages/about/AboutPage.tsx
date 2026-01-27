import { UserContext } from '@/09-UseContext/context/UserContext'
import { Button } from '@/components/ui/button'
import React, { use } from 'react'
import { Link } from 'react-router'

const AboutPage = () => {
    const { isAuthenticated, logout } = use(UserContext)
    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <h1 className='text-4xl font-bold'>about me</h1>
            <hr />
            <div className='flex flex-col gap-2 '>
                {isAuthenticated && (
                    <Link className='hover:text-blue-500 underline text-2xl' to="/profile">Profile </Link>

                )
                }
                {
                    isAuthenticated ? (
                        <Button variant='destructive' className='mt-4' onClick={logout}>
                            logout
                        </Button>
                    ) : (
                        <Link className='hover:text-blue-500 underline text-2xl' to="/login">Login </Link>
                    )
                }
            </div>
        </div>
    )
}

export default AboutPage
