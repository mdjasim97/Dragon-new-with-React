import React, { useEffect, useState } from 'react';
import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';
import LeftSidebar from '../Shared/LeftSidebar/LeftSidebar';
import RighSidebar from '../Shared/RighSidebar/RighSidebar';
import BreakingNews from '../../Component/BreakingNews/BreakingNews';
import User from '../../Component/Users/User';
import News from '../../Component/News/News';

const HomePage = () => {

    const [news, setNews] = useState([])

    useEffect(() => {
        fetch("news.json")
            .then(res => res.json())
            .then(data => setNews(data))
    })
    return (
        <div className='font-poppins'>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>


            <div className='grid grid-cols-1 lg:grid-cols-4 lg:gap-6'>
                <div className='border'>
                    <LeftSidebar></LeftSidebar>
                </div>

                <div className='col-span-2'>
                    <h1 className="font-bold text-center text-3xl my-8 lg:text-start lg:my-4 lg:mb-8">Dragon News Home</h1>


                    <div>
                        {
                            news.map((news, indx) => <News
                                key={indx}
                                news={news}>
                                <User news={news} />
                            </News>)
                        }
                    </div>

                </div>

                <div>
                    <RighSidebar></RighSidebar>
                </div>

            </div>
        </div>
    );
};

export default HomePage;