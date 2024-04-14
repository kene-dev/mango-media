import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import logo from "../assets/login.png";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../features/auth/authSlice";

const Login = () => {
  const [notice, setNotice] = useState("");
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData; // DESTRUCTURED FORM DATA

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      setNotice(message);
      setTimeout(() => {
        setNotice("");
        dispatch(reset());
      }, 2000);
    }

    if (isSuccess || user) {
      navigate("/dashboard");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      password,
      email,
    };
    dispatch(login(userData));
  };

  return (
    <div className="grid lg:grid-cols-3 w-full h-screen">
      <div className="lg:col-span-1 flex flex-col items-center justify-center bg-white rounded-r-md">
        <p>{notice}</p>

        <form onSubmit={handleSubmit} className="w-full py-10 px-12">
          <h1 className="text-black text-[20px] font-sans font-bold mb-[15px]">
            Welcome
          </h1>
          <p className="font-normal font-sans mb-[20px] text-[#11111195]">
            Let's get you logged in
          </p>
          <div>
            <label htmlFor="email" className="text-sm">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              autoComplete="email"
              className="relative block w-full appearance-none rounded-lg border border-[#D9D9D9] mb-[20px] px-3 py-3 text-gray-900 placeholder-[#11111195] focus:border-[#D9D9D9] focus:outline-none sm:text-sm"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="text-sm">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
              autoComplete="current-password"
              className="relative block w-full appearance-none rounded-lg border border-[#D9D9D9] mb-[20px] px-3 py-3 text-gray-900 placeholder-[#11111195] focus:border-[#D9D9D9] focus:outline-none sm:text-sm"
              placeholder="Password"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            {/* <pre>{JSON.stringify(formData, null, 2)}</pre> */}

            <div className="text-sm">
              <a href="#" className="font-medium text-[#FF6700]">
                Forgot your password?
              </a>
            </div>
          </div>

          <button
            onClick={() => navigate("/dashboard")}
            className=" flex w-[80%] mx-auto justify-center mt-9 rounded-md border border-transparent bg-[#FF6700] py-3 px-4 text-sm font-medium text-white  focus:outline-none "
          >
            {isLoading ? "Processing" : "Sign in"}
          </button>
        </form>
      </div>

      <div className="lg:col-span-2 px-14">
        <img src={logo} className="object-contain w-full h-full " />
      </div>
    </div>
  );
};

export default Login;
