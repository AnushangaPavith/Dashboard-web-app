import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "./UseAuth";

const RequireAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        auth?.user
            ? <Outlet />
            : <Navigate to = "/" state={{ from: location }} replace />
    );
}

export default RequireAuth;