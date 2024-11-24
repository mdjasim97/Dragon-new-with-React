import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Category = ({ category }) => {
  const { name, path } = category;
  return (
    <div className=" font-poppins text-xl p-1 rounded-md hover:bg-slate-300">
      <NavLink
        to={`/${path}`}
        className={({ isActive }) =>
          isActive ? "font-bold text-white bg-red-600" : ""
        }
      >
        {name}
      </NavLink>
    </div>
  );
};

Category.proptypes = {
  category: PropTypes.object,
};

export default Category;
