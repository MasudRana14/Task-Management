import { NavLink } from "react-router-dom";
import logo from "../../assets/photo/logo.png"

const NavBar = () => {


    const navMenu = <>


        <NavLink
            to="/"
            className={({ isActive, isPending, }) =>
                isPending ? "pending" : isActive ? "text-pink-600 underline" : ""
            }
        >
            <li className="font-bold">Home</li>
        </NavLink>

        <NavLink
            to="/about"
            className={({ isActive, isPending, }) =>
                isPending ? "pending" : isActive ? "text-pink-600 underline" : ""
            }
        >
            <li className="font-bold">About</li>
        </NavLink>

        <NavLink
            to="/blog"
            className={({ isActive, isPending, }) =>
                isPending ? "pending" : isActive ? "text-pink-600 underline" : ""
            }
        >
            <li className="font-bold">Blog</li>
        </NavLink>

        <NavLink
            to="/contact"
            className={({ isActive, isPending, }) =>
                isPending ? "pending" : isActive ? "text-pink-600 underline" : ""
            }
        >
            <li className="font-bold">Contact</li>
        </NavLink>

    </>


    return (
        <div>
            <div className="navbar bg-slate-200 h-14 rounded-t-md">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-300 rounded-box w-52">
                            {navMenu}
                        </ul>
                    </div>
                    <div className="flex items-center gap-2">
                        <img className="w-12" src={logo} alt="" />
                        <h2 className="text-lg md:text-xl font-bold text-sky-600">Task <span className="text-pink-600">Management</span></h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-7">
                        {navMenu}
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default NavBar;