import React from 'react';
import { Link } from 'react-router-dom';

const News = ({ news }) => {
    const { title, image_url, details, _id} = news
    // console.log(news)
    return (
        <div>
            <div className='lg:p-2'>
                <h1 className='text-2xl lg:text-3xl font-bold lg:my-4 text-justify'>{title}</h1>
                <img src={image_url} />
                {details.length > 200 ? <p className='my-2 text-justify'>{details.slice(0,200)} <Link to={`/newsDetails/${_id}`} className='text-blue-600 font-semibold'>Reads more...</Link></p> : <p>{details}</p>}
            </div>
        </div>
    );
};

export default News;