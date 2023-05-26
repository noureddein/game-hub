import { useState } from "react";
import AuthContext from "../contexts";

interface Props {
    children: React.ReactNode;
}

export interface AuthType {
    accessToken?: string;
    user?: {
        id: number;
        username: string;
        first_name: string;
        last_name: string;
        email: string;
        is_active: boolean;
    };
}

const AuthProvider = ({ children }: Props) => {
    const [auth, setAuth] = useState<AuthType>({});
    return (
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
