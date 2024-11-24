import { useEffect, useState } from "react";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import LeftSidebar from "../Shared/LeftSidebar/LeftSidebar";
import RightSidebar from "../Shared/RightSidebar/RightSidebar";
import BreakingNews from "../../Component/BreakingNews/BreakingNews";
import News from "../../Component/News/News";
import User from "../../Component/Users/User";

const HomePage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  });
  return (
    <div className="font-poppins">
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>

      <div className="grid grid-cols-1 mt-10 lg:grid-cols-4 lg:gap-6">
        <div className="">
          <h1 className="text-xl font-poppins font-bold  text-[#403F3F]">
            All Categories
          </h1>
          <LeftSidebar></LeftSidebar>
        </div>

        <div className="col-span-2">
          <h1 className="text-xl text-[#403F3F] font-poppins px-2 font-bold">
            Dragon News Home
          </h1>
          

          <div>
            {news.map((news, indx) => (
              <News key={indx} news={news}>
                <User news={news} />
              </News>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-xl font-poppins font-bold px-2">Login With</h1>
          <RightSidebar></RightSidebar>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
