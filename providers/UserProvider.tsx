"use client"

import { MyUserContextPrvider } from "@/hooks/useUser";

interface UserProviderProps {
    children: React.ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({
    children
}) => {
    return (
        <MyUserContextPrvider>
            {children}
        </MyUserContextPrvider>
    )
}

export default UserProvider