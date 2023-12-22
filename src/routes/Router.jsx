import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import App from "../App";
import Dashboard from "../layout/Dashboard/Dashboard";
import NewTask from "../layout/Dashboard/NewTask";
import PrivateRoutes from "../privateRoutes/PrivateRoutes";
import LogIn from "../pages/Login/LogIn";
import Register from "../pages/register/Register";
import Tasks from "../layout/Dashboard/Tasks";
import UpdateTask from "../layout/updateTask/UpdateTask";
export const router = createBrowserRouter([
    {
        element: <App />,
        path: '/',
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'login',
                element: <LogIn />
            },
            {
                path: 'register',
                element: <Register />
            },
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: 'newTask',
                element: <PrivateRoutes><NewTask /></PrivateRoutes>
            },
            {
                path: 'tasks',
                element: <Tasks />
            },
            {
                path: 'updateTasks/:id',
                element: <UpdateTask />,
                loader: ({ params }) => fetch(`https://task-management-server-opal.vercel.app/api/v1/taskGetById/${params.id}`)
            },
        ]
    }
])