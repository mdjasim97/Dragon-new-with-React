
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='p-2 md:mx-4 lg:mx-32'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;