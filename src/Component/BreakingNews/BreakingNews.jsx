import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const BreakingNews = () => {
    return (
        <div className='flex'>
            <button className="btn btn-secondary btn-sm lg:btn">Breaking News </button>
            <Marquee pauseOnHover speed={100} className='lg:text-2xl'>
                <Link to="/" className='mr-10'>I can be a React component, multiple React components, or just some text.... </Link>
                <Link to="/" className='mr-10'>I can be a React component, multiple React components, or just some text.... </Link>
                <Link to="/" className='mr-10'>I can be a React component, multiple React components, or just some text.... </Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;