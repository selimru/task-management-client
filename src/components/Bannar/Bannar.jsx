import { Button } from 'flowbite-react';
import ban from '../../assets/ban.jpg'
import { Link } from 'react-router-dom';
const Bannar = () => {
    return (
        <div>
            <div className=' flex flex-col md:flex-row lg:flex-row items-center gap-5'>
                <div className=' w-[40%] bg-blue-200 p-5'>
                    <h3 className='text-5xl text-center '>Own Your</h3>
                    <h3 className='text-5xl text-center'>Dream Home</h3>
                    <div className='flex justify-center'>
                        <Link to='/dashboard/newTask' className='my-1'>
                            <Button color="blue" className='px-5'>Let's Explore</Button>
                        </Link>
                    </div>
                </div>
                <div className='w-[55%]'>
                    <img src={ban} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Bannar;