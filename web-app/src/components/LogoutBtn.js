import { useLocation, Navigate } from "react-router-dom";
import useAuth from "../auth/UseAuth";

const Logout = () => {

    const { setAuth } = useAuth();
    const location = useLocation();
    const logout = async () => {
        setAuth({});
        <Navigate to = "/" state={{ from: location }} replace />
    }

    return logout;
}

export default Logout;