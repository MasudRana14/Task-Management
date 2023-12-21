import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[600px]" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-xl">
                        <h1 className="mb-5 text-5xl font-bold">Welcome To Task Management Website</h1>
                        <p className="mb-5 text-lg">This is a little Task Management website. Here you can create your task and manage it. Click on lets explore to join.</p>
                        <Link to="login">
                            <button className="rounded-md font-bold btn-sm btn-outline text-white hover:bg-sky-500  bg-pink-500">Let’s Explore</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;