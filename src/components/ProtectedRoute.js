import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoute=()=>{
    const [loading, setLoading]=useState(false);
    useEffect(()=>{
        const authCheck=  ()=>{
            var data=  localStorage.getItem("loginItem");
            if(data){
                setLoading(true)
            }else{
                setLoading(false)
            }
        }
        authCheck();
    }, [])
    console.log(loading)
    return loading==true? <Navigate replace to={"/home"}/>: <Outlet/>;
}
export default ProtectedRoute;