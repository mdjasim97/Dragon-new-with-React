import React from 'react';
import ProfilePic from '../../assets/images/user.png'
import {CiBookmark, CiShare2 } from "react-icons/ci";

const User = ({news}) => {
    // console.log(news)
    const {author} = news

    return (
        <div className='flex justify-between bg-base-200 p-5'>

            <div className='flex items-center'>
                <img className='w-12 h-12 rounded-full' src={author["img"]} alt="" />
                <div className='mx-5 space-y-2'>
                    <h3 className='text-2xl font-semibold'>{author["name"]}</h3>
                    <p>{author["published_date"]}</p>
                </div>
            </div>

            <div className='flex text-3xl items-center'>
                <CiBookmark className='mr-4' />
                <CiShare2/>
            </div>

        </div>
    );
};

export default User;