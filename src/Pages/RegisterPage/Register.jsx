import { useContext, useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { sendEmailVerification, updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser, reset } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [registerError, setRegisterError] = useState(" ");
  const [successful, setSuccessful] = useState(" ");
  const [showPassword, setShowPassword] = useState(false);

  const handleUserRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    const Accepted = e.target.terms.checked;
    console.log(Accepted);
    const userInfo = { name, photo, email, password };
    console.log(userInfo);

    setRegisterError(" ");
    setSuccessful(" ");

    if (!Accepted) {
      setRegisterError("Please Accept Terms and Condition. ");
      return;
    }

    // Create New User
    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        // User Profile Data Update
        updateProfile(result.user, { displayName: name, photoURL: photo })
          .then(() => {
            console.log("Profile Updated");
          })
          .catch((error) => {
            console.log(error);
          });

        // User Email Verify
        sendEmailVerification(result.user)
          .then(() => {
            console.log("Email Verification Sent");
            alert("Send email for Verify. Please Check your email.");
          })
          .catch((error) => {
            console.log(error);
            setRegisterError(
              " Email Verification Failed. Please Verify your email."
            );
          });

        setSuccessful("User Register successful");
      
      })
      .catch((error) => {
        console.log(error);
        setRegisterError(error.message);
      });
  };


  const handleResetPassword = () => {
    
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-base-200 font-poppins">
      <Navbar></Navbar>

      <div className="flex flex-col lg:justify-center lg:items-center lg:py-16">
        <div className="bg-white lg:p-16 rounded-2xl">
          <h1 className="text-4xl text-center lg:mx-36 mt-5 "> Register </h1>

          <form onSubmit={handleUserRegister} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                className="input bg-base-200"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL </span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter Photo URL"
                className="input bg-base-200"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email address </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="input bg-base-200"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="input bg-base-200 w-full"
                  required
                />
                <span className="absolute right-3 top-4">
                  {showPassword ? (
                    <FaEyeSlash onClick={handleShowPassword} />
                  ) : (
                    <FaEye onClick={handleShowPassword} />
                  )}
                </span>
              </div>
            </div>

            <div className="flex">
              <input type="checkbox" name="terms" className="mr-2" />

              <span className="label-text">Accept terms and condition </span>
            </div>

            {registerError && (
              <p className="text-red-600 font-bold text-center">
                {registerError}
              </p>
            )}
            {successful && (
              <p className="text-green-600 font-bold text-center">
                {successful}
              </p>
            )}

            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>

          <p className="text-center my-5">
            Already have An Account ?{" "}
            <Link to="/login" className="text-blue-600 font-bold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
