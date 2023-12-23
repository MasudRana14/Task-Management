import { Link } from "react-router-dom";
import BannerImg from "../../../assets/photo/BannerImg.jpg"
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
const Banner = () => {


    const { user } = useContext(AuthContext)

    return (
        <div>
            <div className="hero md:min-h-[600px]" style={{ backgroundImage: `url(${BannerImg})` }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-xl">
                        <h1 className="mb-5 md:text-5xl font-bold">Welcome To Task Management Website</h1>
                        <p className="mb-5 text-lg">This is a little Task Management website. Here you can create your task and manage it. Click on lets explore to join.</p>
                        <Link to="login">
                            <button className="rounded-md font-bold btn-sm btn-outline text-white hover:bg-sky-500  bg-pink-500">Let’s Explore</button>
                        </Link>

                        {
                            user ?<Link to="DashBoard">
                                <button className="rounded-md ml-4 font-bold btn-sm btn-outline text-white hover:bg-pink-500  bg-sky-500">DashBoard</button>
                            </Link>
                            :
                            ""
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;