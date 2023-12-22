import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Button } from "flowbite-react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateTask = () => {
    const task = useLoaderData()
    console.log(task);
    const axiosSecure = useAxiosSecure()
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()
    const onSubmit = async (data) => {

        const taskInfo = {
            title: data.title,
            description: data.description,
            deadline: data.deadline,
            priority: data.priority,
            status: data.status
        }
        console.log(taskInfo);
        axiosSecure.put(`/api/v1/taskUpdate/${task._id}`, taskInfo)
            .then(res => {
                console.log(res.data);
                if (res.data.result.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${task.title} has been updated successfully`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div className=" max-w-6xl mx-auto bg-blue-400 p-10">
            <form onSubmit={handleSubmit(onSubmit)} className="flex max-w-md flex-col gap-4 mx-auto">
                <div>
                    <div className="mb-2 block">
                        <label htmlFor="title" >Title</label>
                    </div>
                    <input defaultValue={task.title} {...register("title", { required: true })} id="title" type="text" placeholder="Title" className=" border rounded-md px-5 py-3 w-full" shadow />
                    {errors.name && <span className=" text-red-500" >Title is required</span>
                    }
                </div>
                <div>
                    <div className="mb-2 block">
                        <label htmlFor="description" >Description</label>
                    </div>
                    <input defaultValue={task.description} {...register("description", { required: true })} id="description" type="text" placeholder="Your description" className=" border rounded-md px-5 py-3 w-full" shadow />
                    {errors.name && <span className=" text-red-500" >Description is required</span>
                    }
                </div>
                <div>
                    <div className="mb-2 block">
                        <label htmlFor="deadline" >Deadline</label>
                    </div>
                    <input defaultValue={task.deadline} {...register("deadline", { required: true })} id="deadline" type="date" placeholder="deadline" className=" border rounded-md px-5 py-3 w-full" shadow />
                    {errors.name && <span className=" text-red-500" >Deadlineis required</span>
                    }
                </div>
                <div>
                    <div className="mb-2 block">
                        <label htmlFor="priority" >Priority</label>
                    </div>
                    <select defaultValue={task.priority} {...register("priority", { required: true })} id="priority" type="text" className=" border rounded-md px-5 py-3 w-full" shadow >
                        <option value="high">High</option>
                        <option value="moderate">Moderate</option>
                        <option value="low">Low</option>
                    </select>
                    {errors.name && <span className=" text-red-500" >Priority is required</span>
                    }
                </div>
                <div>
                    <div className="mb-2 block">
                        <label htmlFor="priority" >Status</label>
                    </div>
                    <select defaultValue={task.status} {...register("status", { required: true })} id="priority" type="text" className=" border rounded-md px-5 py-3 w-full" shadow >
                        <option value="todo">Todo</option>
                        <option value="ongoing">Ongoing</option>
                        <option value="completed">Completed</option>
                    </select>
                    {errors.name && <span className=" text-red-500" >Priority is required</span>
                    }
                </div>
                <Button type='submit' className="btn ">Update Task</Button>
            </form>
        </div>
    );
};

export default UpdateTask;