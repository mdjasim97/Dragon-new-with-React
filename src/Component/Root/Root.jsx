import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='mx-4 lg:mx-32'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;