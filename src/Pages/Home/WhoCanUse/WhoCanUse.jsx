import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from "../../../assets/photo/banker.webp"
import img2 from "../../../assets/photo/Developer.webp"
import img3 from "../../../assets/photo/corporate.jpg"
const WhoCanUse = () => {

    useEffect(()=>{
        AOS.init({
            duration:1300,
            delay: 80,
            
        });
    },[])

    return (
        <div className="bg-sky-300 rounded-md p-3 mt-10">

            <div>
                <h1 className="text-3xl font-bold text-center">Who Can Use The Site</h1>
                <div className="divider w-1/4 mx-auto"></div>
                
            </div>

            {/* Who can use Card  */}
            <div className="grid grid-cols-3" >

                {/* Card 1  */}
                <div className="mx-auto mt-14 mb-10" data-aos="flip-right">

                    <div className="w-72 bg-pink-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div>
                            <img className="rounded-t-lg" src={img1} alt="" />
                        </div>
                        <div className="p-5 text-center">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Banker</h5>
                        </div>
                    </div>

                </div>

                {/* Card 2  */}
                <div className="mx-auto mt-14 mb-10" data-aos="flip-right">

                    <div className="w-72 bg-pink-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div>
                            <img className="rounded-t-lg" src={img2} alt="" />
                        </div>
                        <div className="p-5 text-center">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Developer</h5>
                        </div>
                    </div>

                </div>
                {/* Card 3  */}
                <div className="mx-auto mt-14 mb-10" data-aos="flip-right">

                    <div className="w-72 bg-pink-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div>
                            <img className="rounded-t-lg" src={img3} alt="" />
                        </div>
                        <div className="p-5 text-center">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Corporate</h5>
                        </div>
                    </div>

                </div>
                
            </div>



        </div>
    );
};

export default WhoCanUse;