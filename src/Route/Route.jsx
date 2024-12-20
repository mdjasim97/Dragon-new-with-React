import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/Error-Page/ErrorPage";
import HomePage from "../Pages/Home-Page/HomePage";
import Root from "../Component/Root/Root.jsx";
import Login from "../Pages/LogInPage/Login.jsx";
import Register from "../Pages/RegisterPage/Register.jsx";
import NewsDetails from "../Component/NewsDetails/NewsDetails.jsx";
import AllNews from "../Component/AllNews/AllNews.jsx";
import PrivateRoutes from "./PrivateRoutes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/:news",
        element: <AllNews />,
      },
      {
        path: "/newsDetails/:id",
        element: (
          <PrivateRoutes>
            <NewsDetails />
          </PrivateRoutes>
        ),
        loader: () => fetch("/news.json"),
      },
    ],
  },
]);

export default router;
