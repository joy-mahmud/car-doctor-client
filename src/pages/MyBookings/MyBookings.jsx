import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import useAxios from "../../hooks/useAxios";

const MyBookings = () => {
    const { user } = useContext(AuthContext)
    const [myBookings, setMyBookings] = useState([])
    const axiosSecure = useAxios()
    console.log(myBookings)
    const url = `/order?email=${user?.email}`
    useEffect(() => {
        axiosSecure.get(url)
        .then(res=>{
            setMyBookings(res.data)
        })
        // fetch(`https://car-doctor-server-three-steel.vercel.app/order?email=${user?.email}`)
        //     .then(res => res.json())
        //     .then(data => setMyBookings(data))
    }, [axiosSecure,url])
    const handleDelete = (id)=>{
        fetch(`https://car-doctor-server-three-steel.vercel.app/order/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            const remaining = myBookings.filter(item=>item._id!==id)
            setMyBookings(remaining) 
            console.log('item deleted')})
    }
    return (
        <div>
            {/* {
              myBookings.map(item=>)
          } */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th></th>
                            <th>service name</th>
                            <th>date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                   {
                    myBookings.map((item,idx)=> <tr key={idx}>
                        <th>
                            <button onClick={()=>handleDelete(item._id)} className="btn btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={item.img} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                
                            </div>
                        </td>
                        <td>
                            {item.title}
                        </td>
                        <td>{item.date}</td>
                        <th>
                            <button className="btn btn-ghost btn-xs">Confirm</button>
                        </th>
                    </tr>)
                   }
                     </tbody> 

                </table>
            </div>
        </div>
    );
};

export default MyBookings;