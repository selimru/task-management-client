import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://task-management-server-opal.vercel.app',
  });
  
  const useAxiosSecure = () => {
    return axiosSecure
  };
  
  export default useAxiosSecure;