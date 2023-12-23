import { useForm } from "react-hook-form";

const CreateTask = () => {



    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
       console.log(data);

    }







    return (
        <div>
            <div className="w-3/4 mx-auto bg-blue-300 p-8 rounded-md">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Contest Name</span>
                        </div>
                        <input type="text" {...register("name", { required: true })} placeholder="Contest Name" className="input input-bordered w-full " />
                    </label>

                    <div className="lg:flex gap-3">
                        <label className="form-control w-full my-2">
                            <div className="label">
                                <span className="label-text">Contest Type</span>
                            </div>

                            <select defaultValue="default" {...register("type", { required: true, })} className="select select-bordered w-full ">
                                <option disabled value="default">Select Type</option>
                                <option value="business">Business</option>
                                <option value="medical">Medical</option>
                                <option value="article">Article</option>
                                <option value="gaming">Gaming</option>

                            </select>
                        </label>
                        {/* Contest Price  */}
                        <label className="form-control w-full my-2">
                            <div className="label">
                                <span className="label-text">Contest Price</span>
                            </div>
                            <input type="number" {...register("price", { required: true })} placeholder="Contest Price" className="input input-bordered w-full " />
                        </label>


                    </div>

                    <div className="lg:flex gap-3">

                        {/* Prize money*/}
                        <label className="form-control w-full my-2">
                            <div className="label">
                                <span className="label-text">Prize money</span>
                            </div>
                            <input type="number" {...register("prizeMoney", { required: true })} placeholder="Prize money" className="input input-bordered w-full " />
                        </label>
                        {/* Contest Deadline  */}
                        <label className="form-control w-full my-2">
                            <div className="label">
                                <span className="label-text">Contest Deadline</span>
                            </div>
                            <input type="date" {...register("deadline", { required: true })} className="input input-bordered w-full " />
                        </label>
                    </div>



                    <div className=" text-center mt-3">
                        <button className="btn  bg-blue-600 hover:bg-orange-500 text-white">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateTask;