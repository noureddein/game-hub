import { createContext } from "react";
import { AuthType } from "../providers/AuthProvider";

interface ContextType {
    auth: AuthType;
    setAuth: (value: Object) => void;
}

const AuthContext = createContext<ContextType>({ auth: {}, setAuth: () => {} });

export default AuthContext;
