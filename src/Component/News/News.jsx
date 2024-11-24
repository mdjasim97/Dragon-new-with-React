import { CiBookmark, CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

const News = ({ news }) => {
  const { title, image_url, details, author, total_view, _id } = news;
  // console.log(news);

  return (
    <div>
      <div className="p-2 border my-4 rounded-md">
        <div className="flex justify-between bg-base-200 p-2 rounded-md my-2">
          <div className="flex items-center">
            <img
              src={author.img}
              alt=""
              className="h-10 w-10 mr-5 rounded-full"
            />
            <div>
              <p>{author.name? author.name : 'Anonymous'}</p>
              <p>{new Date(author.published_date).toLocaleDateString()}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <CiBookmark size={20} />
            <CiShare2 size={20} />
          </div>
        </div>

        <h1 className="text-lg md:text-xl font-bold md:my-4 md:text-justify">{title}</h1>
        <img src={image_url} />
        {details.length > 200 ? (
          <p className="my-2 text-base text-justify">
            {details.slice(0, 200)}{" "}
            <Link
              to={`/newsDetails/${_id}`}
              className="text-[#FF8C47] font-semibold"
            >
              Reads more...
            </Link>
          </p>
        ) : (
          <p>{details}</p>
        )}
        <div className="flex justify-between border-t p-2">
          <div className="rating space-x-1 items-center">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <p className="ml-2">4.9</p>
          </div>

          <div className="flex items-center space-x-2">
            <FaEye />
            <p className="ml-2">{total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
