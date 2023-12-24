import { useEffect, useState } from "react";
import useAxios from "../../../../Hooks/useAxios";
import TodoCard from "./TodoCard";


const ToDoList = () => {

    const [toDO, setToDO] = useState([]);
    const axiosData = useAxios();

    useEffect(() => {
        axiosData.get('/tasks')
            .then(res => {
                setToDO(res.data)
            })
    }, [axiosData])


    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    toDO.map(item => <TodoCard key={item._id} item={item}></TodoCard>)
                }
            </div>
        </div>
    );
};

export default ToDoList;