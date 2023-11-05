import { useLoaderData } from "react-router-dom";
import './checkout.css'
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Bookings = () => {
    const checkOutData = useLoaderData()
    const { title, img } = checkOutData
    const {user} = useContext(AuthContext)

    const handleCheckout = (e)=>{
        
        e.preventDefault()
        const form = e.target 
        const name = form.name.value 
        const date = form.date.value 
        const phone = form.phone.value 
        const email = form.email.value 
        const msg = form.msg.value
       

       
        const order ={email,date,name,phone,msg,title,img}

        fetch('https://car-doctor-server-three-steel.vercel.app/order',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data =>console.log(data))
    }

    return (
        <div className="container mx-auto relative">
            <img src={img} alt="" className="h-[300px] w-full" />
            <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] h-[300px] w-full top-0">
                <div className="flex items-center h-full">
                    <h2 className="font-bold text-5xl text-white ml-20">Book Now</h2>
                </div>

            </div>
            <div className="absolute h-[300px] w-full flex justify-center items-end top-0">
                <button className="polygonbtn text-white">Home/checkout</button>
            </div>

            <div className="p-20 bg-base-200 rounded-lg my-20">
            <form onSubmit={handleCheckout} className="card-body">
                <div className="grid grid-cols-2 gap-5">
                    <div className="form-control">
                        
                        <input type="text" name='name' placeholder="First name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                       
                        <input type="date" name="date" placeholder="date" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        
                        <input type="text" name="phone" placeholder="your phone" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        
                        <input type="email" name="email" defaultValue={user?.email} placeholder="your email" className="input input-bordered" required />

                    </div>
                    <textarea name="msg" className="textarea textarea-bordered col-span-2 h-[200px]" placeholder="you message"></textarea>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#FF3811] border-[#FF3811] text-white hover:bg-[#FF3811]">Book now</button>
                </div>
            </form>
            </div>
        </div>



    );
};

export default Bookings;
