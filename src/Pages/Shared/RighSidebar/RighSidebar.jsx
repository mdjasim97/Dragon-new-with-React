import React from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import swimming from '../../../assets/images/qZone1.png'
import classPng from '../../../assets/images/qZone2.png'
import playGround from '../../../assets/images/qZone3.png'
import bgPng from '../../../assets/images/bg.png'

const RighSidebar = () => {
    return (
        <div className='p-2 lg:pt-0'>
            <div>
            <h1 className="font-bold text-center my-8 text-3xl lg:text-start lg:my-4 lg:mb-8">Login with</h1>
                <div className='flex flex-col justify-start space-y-3'>
                    <button className='btn btn-outline'>
                        <FaGoogle />
                        <span>Login with Google</span>
                    </button>
                    <button className='btn btn-outline'>
                        <FaGithub />
                        <span >Login with Github</span>
                    </button>
                </div>
            </div>

            <div className='my-5 lg:my-8'>
                <h1 className="text-3xl font-semibold my-4 text-center lg:text-start">Find Us On</h1>
                <ul className=''>
                    <li className='flex items-center border-y text-xl p-4'><FaFacebook className='mr-3 text-2xl'/> <span>facebook</span></li>
                    <li className='flex items-center border-y text-xl p-4'><FaTwitter className='mr-3 text-2xl'/> <span>Twiter</span></li>
                    <li className='flex items-center border-y text-xl p-4'><FaInstagram className='mr-3 text-2xl'/> <span>Instagram</span></li>
                    
                </ul>
            </div>


            <div className='bg-base-200 p-2'>
                <h1 className="text-3xl lg:text-2xl font-semibold text-center lg:text-start">Q-Zone</h1>
                <img className='my-4 w-full' src={swimming} alt="" />
                <img className='my-4 w-full' src={classPng} alt="" />
                <img className='my-4 w-full' src={playGround} alt="" />
                <div>
                    <img className='w-full' src={bgPng} alt="" />
                </div>

            </div>
        </div>
    );
};

export default RighSidebar;