import React, { useEffect, useState } from 'react';
import Catagory from './../../../Component/Catagory/Catagory';
import img1 from '../../../assets/images/1.png';
import img2 from '../../../assets/images/2.png';
import img3 from '../../../assets/images/3.png';
import { IoCalendarNumberOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const LeftSidebar = () => {

    const [catagories, setCatagories] = useState([])

    useEffect(() => {
        fetch("categories.json")
            .then(res => res.json())
            .then(data => setCatagories(data))
    }, [])
    return (
        <div>

            <h1 className="mt-4 text-2xl text-center font-bold lg:px-4">All Caterogy </h1>

            <h1 className="btn bg-slate-200 w-full my-4 items-center lg:text-xl">National News</h1>
            <NavLink className='space-y-2'>
                {
                    catagories.map((catagory, indx) => <Catagory key={indx} catagory={catagory}>
                    </Catagory>)
                }
            </NavLink>


            <div>
                <div className="card card-compact bg-base-100 my-4">
                    <img className='p-4' src={img1} alt="Shoes" />
                    <div className="card-body">
                        <h2 className="card-title">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                        <div className='grid grid-cols-2'>
                            <h1 className='font-semibold'>Sports</h1>
                            <h3 className='flex items-center'> < IoCalendarNumberOutline className='mr-3' /> <span>Jan 4, 2022</span></h3>
                        </div>

                    </div>
                </div>

                <div className="card card-compact bg-base-100 my-4">
                    <img className='p-4' src={img2} alt="Shoes" />
                    <div className="card-body">
                        <h2 className="card-title">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                        <div className='grid grid-cols-2'>
                            <h1 className='font-semibold'>Sports</h1>
                            <h3 className='flex items-center'> < IoCalendarNumberOutline className='mr-3' /> <span>Jan 4, 2022</span></h3>
                        </div>

                    </div>
                </div>

                <div className="card card-compact bg-base-100 my-4">
                    <img className='p-4' src={img3} alt="Shoes" />
                    <div className="card-body">
                        <h2 className="card-title">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                        <div className='grid grid-cols-2'>
                            <h1 className='font-semibold'>Sports</h1>
                            <h3 className='flex items-center'> < IoCalendarNumberOutline className='mr-3' /> <span>Jan 4, 2022</span></h3>
                        </div>

                    </div>
                </div>

            </div>



        </div>
    );
};

export default LeftSidebar;