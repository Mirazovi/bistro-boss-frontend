import { useContext } from "react";
import useAdmin from "./useAdmin"
import { AuthContext } from "../firebase/AuthProvider";
import { Navigate, useLocation } from "react-router";

const AdminRoute = ({children}) => {
    const [isAdmin,isAdminLoading] = useAdmin();
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading || isAdminLoading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user && isAdmin){
       return children;
    }
  return <Navigate to={'/'} state={{from:location}} replace></Navigate>
}

export default AdminRoute