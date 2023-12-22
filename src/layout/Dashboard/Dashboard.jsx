import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {

    return (
        <div>
            <div className=" flex flex-col md:flex-col lg:flex-row gap-5">
                <div className=" text-center flex flex-row md:flex-row lg:flex-col gap-10 justify-center w-full lg:w-[20%] bg-blue-100">
                    <NavLink
                        to='/dashboard/newtask'
                        className={({ isActive }) =>
                            isActive ? " text-blue-500" : "text-black"
                        }
                    >
                        ADD TASK
                    </NavLink>
                    <NavLink
                        to='/dashboard/tasks'
                        className={({ isActive }) =>
                            isActive ? " text-blue-500" : "text-black"
                        }
                    >
                        TASKS
                    </NavLink>
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            isActive ? " text-blue-500" : "text-black"
                        }
                    >
                        HOME
                    </NavLink>
                </div>
                <div className="w-full lg:w-[70%]">
                    <Outlet />
                </div>
            </div>
        </div >
    );
};

export default Dashboard;