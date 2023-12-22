
import { Button } from "flowbite-react";
import useTask from "../../hooks/useTask"
import { Link } from "react-router-dom";

const Tasks = () => {
    const [tasks, isLoading] = useTask()
    console.log(tasks);
    if (isLoading)
        return <p>loading</p>

    const todoTask = tasks?.filter(task => task.status === 'todo')
    const ongoingTask = tasks?.filter(task => task.status === 'ongoing')
    const completedTask = tasks?.filter(task => task.status === 'completed')
    console.log(todoTask);
    console.log(ongoingTask);
    console.log(completedTask);

    return (
        <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 bg-blue-100 p-5">
            <div>
                <h2 className=" text-2xl mb-5 font-semibold">To Do List</h2>
                <div className=" flex flex-col gap-5">
                    {
                        todoTask?.map(task =>
                            <div key={task?._id} className=" border border-blue-300 p-3">
                                <h3>Title: {task?.title}</h3>
                                <h4>Description: {task?.description}</h4>
                                <h4>Deadline: {task?.deadline}</h4>
                                <h4>Priority: {task?.priority}</h4>
                                <div className=" flex justify-center py-3">
                                    <div className=" flex flex-row items-center gap-3">
                                        <Button>Update</Button>
                                        <Button>Delete</Button>
                                        <Link to={`/dashboard/updateTasks/${task._id}`}>
                                            <Button>Update</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div>
                <h2 className=" text-2xl mb-5 font-semibold">Ongoing List</h2>
                <div className=" flex flex-col gap-5">
                    {
                        ongoingTask?.map(task =>
                            <div key={task?._id} className=" border border-blue-300 p-3">
                                <h3>Title: {task?.title}</h3>
                                <h4>Description: {task?.description}</h4>
                                <h4>Deadline: {task?.deadline}</h4>
                                <h4>Priority: {task?.priority}</h4>
                                <div className=" flex justify-center py-3">
                                    <div className=" flex flex-row items-center gap-3">
                                        <Button>Update</Button>
                                        <Button>Delete</Button>
                                        <Link to={`/dashboard/updateTasks/${task._id}`}>
                                            <Button>Update</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div>
                <h2 className=" text-2xl mb-5 font-semibold">Completed List</h2>
                <div className=" flex flex-col gap-5">
                    {
                        completedTask?.map(task =>
                            <div key={task?._id} className=" border border-blue-300 p-3">
                                <h3>Title: {task?.title}</h3>
                                <h4>Description: {task?.description}</h4>
                                <h4>Deadline: {task?.deadline}</h4>
                                <h4>Priority: {task?.priority}</h4>
                                <div className=" flex justify-center py-3">
                                    <div className=" flex flex-row items-center gap-3">
                                        <Button>Update</Button>
                                        <Button>Delete</Button>
                                        <Link to={`/dashboard/updateTasks/${task._id}`}>
                                            <Button>Update</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Tasks;