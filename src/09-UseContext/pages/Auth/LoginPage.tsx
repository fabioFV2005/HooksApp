import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, useNavigate } from 'react-router';
import * as React from 'react';
import { useContext, useState } from 'react';
import { UserContext } from '@/09-UseContext/context/UserContext';
import { toast } from 'sonner';

const LoginPage = () => {
    const { login } = useContext(UserContext);
    const [userId, setUserId] = useState("")
    const navigation = useNavigate();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log({ userId });
        const result = login(+userId);
        if (!result) {
            toast.error(`user ${userId} not found`, { duration: 5000, action: { label: 'cerrar', onClick: () => toast.dismiss() }, position: 'top-right' });
            return;
        }
        toast.success(`welcome user ${userId}`, { duration: 3000, position: 'top-right' });
        navigation('/profile')
    }
    return (
        <div className="flex flex-col items-center  min-h-screen">
            <h1 className="text-4xl font-bold "> Login</h1>
            <hr />
            <form
                onSubmit={handleSubmit}
                className='flex flex-col gap-2 my-10'
            >
                <Input
                    type='number'
                    placeholder='user ID'
                    value={userId}
                    onChange={event => setUserId(event.target.value)}
                />
                <Button
                    type='submit'>
                    Login
                </Button >
            </form>
            <Link to="/" >
                <Button variant="ghost">
                    Go back to about
                </Button>
            </Link>
        </div>
    )
}

export default LoginPage
