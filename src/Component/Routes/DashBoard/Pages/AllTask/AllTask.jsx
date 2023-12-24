import { useEffect, useState } from "react";
import useAxios from "../../../../../Hooks/useAxios";
import TaskCard from "../../TaskCard/TaskCard";

const AllTask = () => {

    const [task, setTask] = useState([]);
    const axiosData = useAxios();

    useEffect(()=>{
        axiosData.get('/tasks')
        .then(res=>{
            setTask(res.data)
        })
    },[axiosData])

    return (
        <div className=" md:flex">

            {/* Div 1  */}
            <div className="bg-pink-200  md:w-3/5  md:min-h-screen">
                <h2 className="text-center mt-4 text-xl font-bold">To-DO-List</h2>
                <div className="divider"></div>

                {
                    task.map(item => <TaskCard key={item._id} item={item}></TaskCard>)
                }

            </div>

            {/* Div 2  */}
            <div className="bg-green-200  md:w-3/5  md:min-h-screen md:ml-4">
                <h2 className="text-center mt-4 text-xl font-bold">Ongoing</h2>
                <div className="divider"></div>
            </div>

            {/* Div 3  */}
            <div className="bg-indigo-200  md:w-3/5  md:min-h-screen md:ml-4">
                <h2 className="text-center mt-4 text-xl font-bold">Completed</h2>
                <div className="divider"></div>
            </div>

        </div>
    );
};

export default AllTask;