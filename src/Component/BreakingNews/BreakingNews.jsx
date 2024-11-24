
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const BreakingNews = () => {
    return (
        <div className='flex my-5'>
            <button className=" font-poppins btn bg-[#D72050] text-white md:text-xl md:px-4 md:py-2">Latest </button>
            <Marquee pauseOnHover speed={100} className='text-base md:text-lg text-[#403F3F]'>
                <Link to="/" className='mr-10'>I can be a React component, multiple React components, or just some text.... </Link>
                <Link to="/" className='mr-10'>I can be a React component, multiple React components, or just some text.... </Link>
                <Link to="/" className='mr-10'>I can be a React component, multiple React components, or just some text.... </Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;