
const TaskCard = ({ item }) => {

    const { title, type, deadline, description} = item;

    return (
        <div>
            <div className="p-2 ">
                <div className="w-full bg-base-100 rounded-md shadow-xl">
                    <div className="p-2">
                        <h2 className="font-medium">Title: <span className="font-bold">{title}</span></h2>
                        <p className="font-medium">Deadline: <span className="font-normal">{deadline}</span></p>
                        <p className="font-medium">Priority: <span className="font-normal">{type}</span></p>
                        <p className="font-medium">Description: <span className="font-normal">{description}</span></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;