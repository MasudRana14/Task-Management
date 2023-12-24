import { useForm } from "react-hook-form";
import useAxios from "../../../../Hooks/useAxios";
import Swal from "sweetalert2";

const CreateTask = () => {

    const { register, handleSubmit, reset } = useForm()
    const axiosData = useAxios()

    const onSubmit = async (data) => {
        console.log(data);

        const taskItem = {
            title: data.title,
            type: data.type,
            deadline: data.deadline,
            description: data.description,
        }
        const taskAll = await axiosData.post('/tasks', taskItem);
        if (taskAll.data.insertedId) {
            reset()
            Swal.fire({
                position: "center",
                icon: "success",
                title: `${data.title} Added SuccessFully`,
                showConfirmButton: false,
                timer: 1500
            });
        }


    }







    return (
        <div>


            <div>
                <h1 className="text-2xl font-bold text-center mb-5">Create Your Task</h1>
                <div className="divider"></div>
            </div>



            <div className="w-3/4 mx-auto bg-pink-300 p-8 rounded-md">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Task Title</span>
                        </div>
                        <input type="text" {...register("title", { required: true })} placeholder="Task Titles" className="input input-bordered w-full " />
                    </label>


                    <div className="lg:flex gap-3">

                        <label className="form-control w-full my-2">
                            <div className="label">
                                <span className="label-text">Task Priority</span>
                            </div>

                            <select defaultValue="default" {...register("type", { required: true, })} className="select select-bordered w-full ">
                                <option disabled value="default">Select Priority</option>
                                <option value="business">Low</option>
                                <option value="medical">Moderate</option>
                                <option value="article">High</option>

                            </select>
                        </label>
                        {/* Contest Deadline  */}
                        <label className="form-control w-full my-2">
                            <div className="label">
                                <span className="label-text">Task Deadline</span>
                            </div>
                            <input type="date" {...register("deadline", { required: true })} className="input input-bordered w-full " />
                        </label>
                    </div>




                    <div className="lg:flex gap-3">

                        {/* Task Description  */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Task Description</span>

                            </div>
                            <textarea {...register("description", { required: true })} className="textarea textarea-bordered h-24" placeholder="Task Description"></textarea>
                        </label>


                    </div>

                    <div className=" text-center mt-3">
                        <button className="btn px-7 bg-pink-600 hover:bg-sky-600 text-white">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateTask;