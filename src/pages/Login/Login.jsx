import loginImg from '../../../public/assets/images/login/login.svg'
import fbicon from '../../../public/social/facebook.svg'
import lnicon from '../../../public/social/linkedin.svg'
import glicon from '../../../public/social/google 1.svg'
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const {signIn} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const handleLogin = e=>{
        e.preventDefault()
        const form = e.target 
        const email = form.email.value 
        const password = form.password.value 

        signIn(email,password)
        .then(res=>{
            console.log(res.user)
     
            navigate(location?.state?location.state:'/')

        })
        .catch(error=>console.error(error))


    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row items-center justify-center">
                <div className="text-center lg:text-left">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <div className='flex flex-col justify-center items-center gap-5 mt-5'>
                                <p>Or sign in with</p>
                                <div className='flex gap-3'>
                                    <div className='bg-[#F5F5F8] rounded-full w-[55px] h-[55px] flex justify-center items-center'><img src={fbicon} alt="" /></div>
                                    
                                    <div className='bg-[#F5F5F8] rounded-full w-[55px] h-[55px] flex justify-center items-center' ><img src={lnicon} alt="" /></div>
                                    <div className='bg-[#F5F5F8] rounded-full w-[55px] h-[55px] flex justify-center items-center'><img src={glicon} alt="" /></div>
                                    
                                </div>
                                <p>Dont have an acount? <Link to="/signup" className='text-[#FF3811]'>Sign up</Link></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;