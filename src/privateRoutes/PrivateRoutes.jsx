import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoutes = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useAuth()

    if (loading)
        return <p>loading...</p>
    if (!user) {
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
    return children
};

export default PrivateRoutes;