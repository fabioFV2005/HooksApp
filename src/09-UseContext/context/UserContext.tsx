import { createContext, useEffect, useState, type FC, type PropsWithChildren } from "react"
import { users, type User } from "../data/user-mock.data";

// HOC ---> Higher Order Component
// is a component that wrap children with extra functionality

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

interface UserContextProps {
    // state
    authenticatedStatus: AuthStatus;
    user: User | null;
    isAuthenticated: boolean;
    // methods
    login: (userId: number) => boolean;
    logout: () => void;
}

export const UserContext = createContext({} as UserContextProps);

export const UserContextProvider: FC<PropsWithChildren> = ({ children }) => {

    const [authStatus, setAuthStatus] = useState<AuthStatus>('checking');
    const [user, setUser] = useState<User | null>(null);
    const handleLogin = (userId: number): boolean => {
        const userMock = users.find(user => user.id === userId);
        if (!userMock) {
            console.log("User not found: " + userId);
            setUser(null);
            setAuthStatus('not-authenticated');
            return false;
        }
        setUser(userMock);
        setAuthStatus('authenticated');
        localStorage.setItem('userId', userId.toString());
        return true;
    }
    const handleLogout = () => {
        console.log("logout")
        setAuthStatus('not-authenticated');
        setUser(null);
        localStorage.removeItem('userId');
    }



    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) {
            handleLogin(+storedUserId);
            return;
        }
        handleLogout();
    }, [])

    return (
        <UserContext value={{
            authenticatedStatus: authStatus,
            isAuthenticated: authStatus === 'authenticated',
            user: user,
            login: handleLogin,
            logout: handleLogout


        }}>
            {children}
        </UserContext>
    )
}

