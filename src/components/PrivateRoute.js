import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const PrivateRoute=()=>{
    const [loading, setLoading]=useState(true);
    
    useEffect(()=>{
        const authCheck=  ()=>{
            var data=  localStorage.getItem("loginItem");
            if(data){
                setLoading(false)
            }else{
                setLoading(true)
            }
            console.log(data);
        }
        authCheck();
    }, [])
    return loading ? <h2>Not allowed without Login</h2>: <Outlet/>;
}
export default PrivateRoute;