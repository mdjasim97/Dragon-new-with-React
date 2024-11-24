import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import swimming from "../../../assets/images/qZone1.png";
import classPng from "../../../assets/images/qZone2.png";
import playGround from "../../../assets/images/qZone3.png";
import bgPng from "../../../assets/images/bg.png";
import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const RightSidebar = () => {
  const { handleGoogleLogin, setUser, handleGithubLogin } =
    useContext(AuthContext);

  const GoogleSignIn = () => {
    handleGoogleLogin()
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        Navigate(location?.state ? location.state : "/");
      })
      .catch((error) => console.log(error));
  };

  const GithubSignIn = () => {
    handleGithubLogin()
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        Navigate(location?.state ? location.state : "/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="my-4">
      <div className="flex flex-col justify-start space-y-3">
        <button onClick={GoogleSignIn} className="btn btn-outline">
          <FaGoogle />
          <span>Login with Google</span>
        </button>
        <button onClick={GithubSignIn} className="btn btn-outline">
          <FaGithub />
          <span>Login with Github</span>
        </button>
      </div>

      <div className="my-5 lg:my-8">
        <h1 className="text-3xl font-semibold my-4 text-center lg:text-start">
          Find Us On
        </h1>
        <ul className="">
          <Link to={`https://www.facebook.com/mjunachole97`} target="_blank" className="flex items-center border-y text-xl p-4">
            <FaFacebook className="mr-3 text-2xl" /> <span>facebook</span>
          </Link>
          <Link to="/" className="flex items-center border-y text-xl p-4">
            <FaTwitter className="mr-3 text-2xl" /> <span>Twitter</span>
          </Link>
          <Link to="/" className="flex items-center border-y text-xl p-4">
            <FaInstagram className="mr-3 text-2xl" /> <span>Instagram</span>
          </Link>
        </ul>
      </div>

      <div className="bg-base-200 p-2">
        <h1 className="text-3xl lg:text-2xl font-semibold text-center lg:text-start">
          Q-Zone
        </h1>
        <img className="my-4 w-full" src={swimming} alt="" />
        <img className="my-4 w-full" src={classPng} alt="" />
        <img className="my-4 w-full" src={playGround} alt="" />
        <div>
          <img className="w-full" src={bgPng} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
