import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Services = () => {
    const [services,setServices]=useState([])
    
    useEffect(()=>{
        axios.get('https://car-doctor-server-three-steel.vercel.app/services',{withCredentials:true})
        // .then(res=>res.json())
        .then(data=>setServices(data.data))
    },[])
    return (
        <div className="mb-5">
            <div className="text-center mb-10 space-y-2">
                <p className="text-xl font-bold text-[#FF3811]">Our srvices</p>
                <h2 className="text-4xl font-bold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, <br /> by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    services.map((item,idx)=><div key={idx}>
                        <img src={item.img} alt="" className='rounded-lg h-[208px] w-full'/>
                        <p className='text-2xl font-bold'>{item.title}</p>
                        <p className='text-xl font-bold text-[#FF3811]'>Price : ${item.price}</p>
                        <button className="btn bg-[#FF3811] border-[#FF3811] text-white hover:bg-[#FF3811]"><Link to={`/booking/${item._id}`}>Book Now</Link></button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;