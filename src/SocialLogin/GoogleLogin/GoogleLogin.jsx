import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import {  FaGoogle } from 'react-icons/fa';


const GoogleLogin = () => {

    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/DashBoard";

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const user = result.user;
            console.log(user);
            swal("Good job!", "Login Successfully", "success");
            navigate(from,{replace:true});
        })
        .catch(error=>{
            swal("Oops..!", `${error.message}`, "error");
        })

    }

    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn bg-blue-500 hover:bg-orange-500 text-white px-8 btn-sm text-xl"><FaGoogle></FaGoogle></button>

        </div>
    );
};

export default GoogleLogin;