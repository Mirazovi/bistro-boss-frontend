import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useMenu = () => {
  const axiosPublic = useAxiosPublic();
  const {data: menus=[] , isPending: loading,refetch} = useQuery({
    queryKey:['menus'],
    queryFn: async () =>{
      const res = await axiosPublic.get('/menus');
      return res.data;
    }
  })
  return [menus,loading,refetch]
}

export default useMenu