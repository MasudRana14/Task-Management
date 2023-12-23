
const AllTask = () => {

    return (
        <div className=" md:flex">

            {/* Div 1  */}
            <div className="bg-pink-200  md:w-1/2 h-28 md:min-h-screen">
                <h2 className="text-center mt-4 text-xl font-bold">To-DO-List</h2>
                <div className="divider"></div>
            </div>

            {/* Div 2  */}
            <div className="bg-green-200  md:w-1/2 h-28 md:min-h-screen md:ml-4">
                <h2 className="text-center mt-4 text-xl font-bold">Ongoing</h2>
                <div className="divider"></div>
            </div>

            {/* Div 3  */}
            <div className="bg-indigo-200  md:w-1/2 h-28 md:min-h-screen md:ml-4">
                <h2 className="text-center mt-4 text-xl font-bold">Completed</h2>
                <div className="divider"></div>
            </div>

        </div>
    );
};

export default AllTask;