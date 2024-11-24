
import RightSidebar from './../../Pages/Shared/RightSidebar/RightSidebar';
import Header from './../../Pages/Shared/Header/Header'
import { useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const NewsDetails = () => {
    

    const newsData = useLoaderData()
    console.log(newsData)

    const { id } = useParams()
    console.log(id)



    const myNews = newsData.find(check => check._id == id)
    console.log(myNews)


    // console.log(newsDetails)

    return (
        <div>

            <Header></Header>
            <Navbar></Navbar>

            <div className='grid grid-cols-1 lg:grid-cols-4'>
                <div className='col-span-3 lg:p-4'>
                    <h1 className="text-3xl font-bold my-5 text-center lg:text-start">Dragon News </h1>

                    <div className='p-2 lg:p-5 border rounded-2xl'>
                        <h1 className='text-2xl lg:text-4xl font-bold text-justify my-4'>{myNews.title}</h1>
                        <img src={myNews.image_url} />
                        <p className='my-4 lg:text-xl text-justify'>{myNews.details}</p>



                    </div>


                </div>
                <RightSidebar></RightSidebar>
            </div>

        </div>
    );
};

export default NewsDetails;