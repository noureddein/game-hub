import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();
    console.log("From RequireAuth component", auth.user?.id)
    return auth.user?.id ? (
        <Outlet />
    ) : (
        <Navigate to="/login" state={{ from: location }} replace={true} /> // state and replace allow the user to go back from he were
    );
};

export default RequireAuth;
