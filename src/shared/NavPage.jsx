import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import useAuth from '../hooks/useAuth';
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom';
const NavPage = () => {
    const { user, logOut } = useAuth()

    const handleLogOut = () => {
        logOut()
    }
    return (
        <Navbar fluid rounded>
            <Navbar.Brand>
                <img src={logo} className="mr-3 h-12 sm:h-12 rounded-full" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Task Management</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                {!user &&
                    <Link to='/login'>
                        <Button>LogIn</Button>
                    </Link>
                }
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" img={user?.photoURL} rounded />
                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm">{user?.displayName}</span>
                        <span className="block truncate text-sm font-medium">{user?.email}</span>
                    </Dropdown.Header>
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Earnings</Dropdown.Item>
                    <Dropdown.Divider />
                    {user &&
                        <Dropdown.Item onClick={handleLogOut}>Sign out</Dropdown.Item>
                    }
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <NavLink to="/" active>
                    Home
                </NavLink>
                <NavLink to="#">About</NavLink>
                <NavLink to="#">Services</NavLink>
                <NavLink to="#">Contact</NavLink>
            </Navbar.Collapse>
        </Navbar >
    );
};

export default NavPage;