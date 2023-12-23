import { Link, useNavigate } from "react-router-dom";
import LoginLogo from "../../assets/photo/SignIn.svg"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";



const LogIn = () => {

    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
 

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
               alert("Good job!", "Login Successfully", "success");
                navigate('/DashBoard');
            })
            .catch(error => {
                alert("Oops..!", `${error.message}`, "error");
            })

    }




    return (
        <div>
            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="">

                        <img className="w-[500px]" src={LoginLogo} alt="" />

                    </div>

                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="text-center p-4">
                            <h2 className="text-2xl font-bold">WELCOME BACK!</h2>
                            <p className="font-semibold">Please Log In to your Account!</p>
                        </div>
                        <form onSubmit={handleLogin} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">EMAIL ADDRESS</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PASSWORD</span>
                                </label>
                                <input type="password" name="password" placeholder="Enter Your Password" className="input input-bordered" required />
                            </div>

                            <div className="form-control mt-6">
                                <input className=" p-1 rounded-md font-bold text-white hover:cursor-pointer hover:bg-sky-500 bg-pink-600" type="submit" value="Login" />
                            </div>

                            <div className="divider">OR</div>

                        </form>
                        <div className=" mx-auto -mt-6 mb-3">
                            {/* <GoogleLogin></GoogleLogin> */}
                        </div>
                        <div className="mx-auto p-2">
                            <p>DON NOT HAVE AN ACCOUNT? <Link to="/signUp"><span className="text-blue-500 font-bold">SIGN UP HERE</span></Link></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LogIn;