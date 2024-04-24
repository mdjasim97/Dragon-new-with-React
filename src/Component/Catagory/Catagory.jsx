import React from 'react';
import { NavLink } from 'react-router-dom';

const Catagory = ({ catagory }) => {
    const { name } = catagory
    return (
        <div className='my-18'>
            <ul>
                <li><NavLink to="/" className='p-4 text-xl'>{name}</NavLink></li>
            </ul>

        </div>
    );
};

export default Catagory;