import { useQuery } from 'react-query';
import useAxiosSecure from './useAxiosSecure';
import { data } from 'autoprefixer';

const useTask = () => {
    const axiosSecure = useAxiosSecure()
    const { data: tasks, isLoading } = useQuery({
        queryKey: ['task'],
        queryFn: async () => {
            const res = await axiosSecure.get('/api/v1/taskGet')
            return res.data
        }

    })
    return [tasks, isLoading]
};

export default useTask;