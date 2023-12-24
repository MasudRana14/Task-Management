import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const { user, loading, } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return < div className="flex justify-center mx-auto py-20">
            <span className="loading loading-spinner text-success w-20"></span>
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>

};

export default PrivateRoute;