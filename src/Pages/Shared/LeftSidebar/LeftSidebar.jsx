import { useEffect, useState } from "react";
import Category from "./../../../Component/Category/Category";
import img1 from "../../../assets/images/1.png";
import img2 from "../../../assets/images/2.png";
import img3 from "../../../assets/images/3.png";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const LeftSidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h1 className="btn bg-slate-200 w-full my-4 items-center lg:text-xl">
        National News
      </h1>
      <NavLink className="md:space-y-2">
        {categories.map((category, indx) => (
          <Category key={indx} category={category}></Category>
        ))}
      </NavLink>

      <Link to="/" className="card card-compact bg-base-100 my-4">
        <img className="my-5" src={img1} alt="Shoes" />

        <h2>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
        <div className="flex justify-between my-2">
          <h1 className="font-semibold">Sports</h1>
          <h3 className="flex items-center">
            {" "}
            <IoCalendarNumberOutline className="mr-3" />{" "}
            <span>Jan 4, 2022</span>
          </h3>
        </div>
      </Link>

      <Link to="/" className="card card-compact bg-base-100 my-4">
        <img className="my-5" src={img2} alt="Shoes" />

        <h2>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
        <div className="flex justify-between my-2">
          <h1 className="font-semibold">Sports</h1>
          <h3 className="flex items-center">
            {" "}
            <IoCalendarNumberOutline className="mr-3" />{" "}
            <span>Jan 4, 2022</span>
          </h3>
        </div>
      </Link>

      <Link to="/" className="card card-compact bg-base-100 my-4">
        <img className="my-5" src={img3} alt="Shoes" />

        <h2>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
        <div className="flex justify-between my-2">
          <h1 className="font-semibold">Sports</h1>
          <h3 className="flex items-center">
            {" "}
            <IoCalendarNumberOutline className="mr-3" />{" "}
            <span>Jan 4, 2022</span>
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default LeftSidebar;
