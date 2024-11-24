import { useParams } from "react-router-dom";

const AllNews = () => {
  const { news } = useParams();
  console.log(news);
  return (
    <div className="flex justify-center min-h-screen items-center">
      <h1 className="text-7xl font-bold">{news} page</h1>
    </div>
  );
};

export default AllNews;
