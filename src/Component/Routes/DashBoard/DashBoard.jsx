import { useContext } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";


const DashBoard = () => {

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = () => {

        logOut()
            .then(res => {
                console.log(res)
                alert("Good job!", "SignOut Successfully", "success")
            })

            .catch(error => {
                alert("Oops..!", `${error.message}`, "error");
            })
        navigate("/")
    }




    return (
        <div>
            <div>


                <div className="flex">

                    {/* Dashboard Side Menu Bar  */}
                    <div className=" w-32 lg:w-72 min-h-screen bg-sky-500 ">

                        {/* Title  */}
                        <div className="text-center mt-6">
                            {/* DashBoard Avatar  */}
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src={user?.photoURL} />
                                </div>
                            </div>

                            <h1 className="lg:text-xl text-center mt-2  font-bold text-black">{user?.displayName}</h1>

                            <div className="divider"></div>
                        </div>

                        <ul className="menu lg:p-4 text-black">

                            <li className="lg:font-bold lg:text-base mx-auto">
                                <NavLink to="/dashboard/task">All Task</NavLink>
                            </li>

                            <div className="divider">OR</div>

                            <li className="lg:font-bold lg:text-base mx-auto">
                                <NavLink to="/"> Home</NavLink>
                            </li>

                            <div onClick={handleSignOut} className="mx-auto">
                                <Link className="font-bold btn btn-sm hover:bg-green-300 ">SignOut</Link>
                            </div>

                        </ul>

                    </div>
                    {/* Dashboard content  */}

                    <div className="flex-1 md:p-4 m-4">
                        <Outlet></Outlet>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;