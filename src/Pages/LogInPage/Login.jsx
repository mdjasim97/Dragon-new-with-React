import React, { useRef, useState } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Context/ContextProvider';

const Login = () => {

    const { handleSignIn, handlePasswordReset } = useContext(AuthContext)
    const refDom = useRef()
    const location = useLocation()
    const navigate = useNavigate()

    const [loginError, setLoginError] = useState(" ")
    const [successfull, setSuccessfull] = useState(" ")
    const [user, setUsers] = useState(null)


    const handleSignInUser = (e) => {
        e.preventDefault()

        const form = new FormData(e.currentTarget)
        const email = form.get("email")
        const password = form.get("password")
        // console.log(email, password)

        setSuccessfull(" ")
        setLoginError(" ")

        handleSignIn(email, password)
            .then(result => {
                const userSign = (result.user)
                navigate(location?.state ? location.state : "/")
                console.log(userSign)
                if (result.user.emailVerified) {
                    setSuccessfull("User Signin successfull")
                    setUsers(result.user)
                    
                }
                else{
                    setLoginError("Please Verify your email.")
                }

            })
            .catch(error => {
                // console.log(error)
                setLoginError(error.message)
            })
    }


    const passwordReset = () => {
        const email = refDom.current.value;
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/.test(email)) {
            // setLoginError("Please Enter an valid email.")
            console.log(typeof email)
            return
        }

        handlePasswordReset(email)
            .then(result => {
                console.log(result)
                setSuccessfull("Check Email and Verify")
            })
            .catch(error => console.log(error))
    }


    return (
        <div className='bg-base-200 font-poppins'>
            <Navbar></Navbar>

            <div className='lg:min-h-[700px] flex flex-col lg:justify-center lg:items-center'>
                <div className='bg-white lg:p-16 lg:rounded-2xl'>
                    <h1 className='text-4xl text-center lg:mx-36 lg:mb-12'>Login</h1>
                    <form onSubmit={handleSignInUser} className='space-y-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email address </span>
                            </label>
                            <input ref={refDom} type="email" name='email' placeholder="Enter your email address" className="input bg-base-200" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Enter your password" className="input bg-base-200" required />
                            <label onClick={passwordReset} className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='text-center my-5'>Dont’t Have An  Account ? <Link to="/register" className="text-blue-600 font-bold">Register</Link></p>
                    {successfull && <p className='text-green-600 font-bold text-center'>{successfull}</p>}
                    {loginError && <p className='text-red-600 font-bold text-center'>{loginError}</p>}
                </div>
            </div>


        </div>
    );
};

export default Login;