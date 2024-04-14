import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import home from "../assets/home.svg";
import bi from "../assets/bi.svg";
import help from "../assets/help.svg";
import home1 from "../assets/ic.svg";
import bi1 from "../assets/ic1.svg";
import help1 from "../assets/ic2.svg";
import vader from "../assets/vader.png";
import exit from "../assets/logout.svg";
import mango from "../assets/mango.png";
import profile from "../assets/profile.png";
import dropp from "../assets/dropp.svg";
import crate from "../assets/crate.svg";
import { resetClient } from "../features/client/clientSlice";
import { resetChart } from "../features/chartData/chartSlice";

const Sidebar = () => {
  const menus = [
    { name: "Overview", path: "", icon: home, ic: home1 },
    { name: "Bi Analysis", path: "bianalysis", icon: bi, ic: bi1 },
    { name: "Help", path: "help", icon: help, ic: help1 },
  ];
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [current, setCurrent] = useState(0);
  // const [client, setClient] = useState([]);

  const clients = useSelector((state) => state.client);
  const navigate = useNavigate();

  const findIndex = (index) => {
    setCurrent(index);
  };

  const signOut = () => {
    dispatch(logout());
    dispatch(reset());
    dispatch(resetClient());
    dispatch(resetChart());
  };

  return (
    <div className="hidden w-[286px] lg:flex flex-col min-h-screen bg-[#FFFFFF] rounded-r-xl">
      <div className="w-full flex flex-col items-center justify-center bg-black text-white py-2 gap-y-1 rounded-r-xl">
        <img
          className="rounded-full w-[100px] h-[100px] mb-1 object-contain bg-white"
          src={user?.user?.userImage ? user?.user?.userImage : vader}
          alt="logo"
        />
        <h1 className="text-xs -mb-1 font-medium uppercase">
          {user?.user?.name}
        </h1>
        <p className="text-xs font-medium">0010101021</p>
      </div>
      <div className="flex flex-col items-center justify-between w-full h-full ">
        <div className="flex flex-col gap-1">
          {clients.client.count > 0 &&
          (user?.user?.role === "admin") |
            (user?.user?.role === "media-house") ? (
            <div className="flex items-center text-sm font-medium text-left p-3 justify-start text-white rounded-lg w-full gap-x-6 cursor-pointer mt-3">
              <img
                src={profile}
                className="w-[62px] h-[62px] object-contain rounded-full"
              />
              <div className="flex flex-col items-center">
                <p className="text-[#111111] text-sm">
                  {clients?.client?.users[0]?.name}
                </p>
                <p className="text-[#1111114D] text-xs">
                  {clients?.client?.users[0]?._id?.slice(0, 10)}
                </p>
              </div>

              <img src={dropp} width={9} height={9} alt="drop" />
            </div>
          ) : null}

          {user?.user.role === "admin" && clients.client.count === 0 ? (
            <div className="w-max px-1 py-3 mt-4 h-4 border-b-[2px] border-black flex items-center justify-start">
              <img src={crate} className="w-4 h-4 object-contain" />
              <p
                onClick={() => navigate("clients")}
                className="text-sm cursor-pointer text-black font-semibold px-7"
              >
                Create new clients
              </p>
            </div>
          ) : null}

          {user?.user.role === "media-house" && clients.client.count === 0 ? (
            <div className="w-max px-1 py-3 mt-4 h-4 border-b-[2px] border-black flex items-center justify-start">
              <img src={crate} className="w-4 h-4 object-contain" />
              <p
                onClick={() => navigate("clients")}
                className="text-sm cursor-pointer text-black font-semibold px-7"
              >
                Create new clients
              </p>
            </div>
          ) : null}

          {user?.user.role === "admin" && clients.client.count > 0 ? (
            <p
              onClick={() => navigate("clients")}
              className="text-sm cursor-pointer underline text-[#FF6700] px-7"
            >
              Show all clients
            </p>
          ) : null}
          {user?.user.role === "media-house" && clients.client.count > 0 ? (
            <p
              onClick={() => navigate("clients")}
              className="text-sm cursor-pointer underline text-[#FF6700] px-7"
            >
              Show all clients
            </p>
          ) : null}

          {/* SECTION ONE  START*/}
          <ul className="flex flex-col gap-y-4 items-center justify-center  mt-3">
            {menus.map((menu, index) => (
              <Link
                onClick={() => findIndex(index)}
                to={menu.path}
                key={index}
                style={{
                  background: current === index ? "#FF6700" : "transparent",
                }}
                className={
                  current === index
                    ? "flex items-center text-sm font-medium text-left p-3 justify-start text-white rounded-lg w-[188px] gap-x-4 cursor-pointer"
                    : "flex items-center text-sm font-medium text-left p-3 justify-start text-black rounded-lg w-[188px] gap-x-4 cursor-pointer"
                }
              >
                <img
                  className="fill-white p-0"
                  src={current === index ? menu.ic : menu.icon}
                />
                {menu.name}
              </Link>
            ))}
          </ul>
          {/* SECTION ONE  END*/}
        </div>

        {/* SECTION TWO  START*/}
        <div className="pb-16 gap-y-5 flex flex-col items-center justify-center ">
          <li
            onClick={signOut}
            className="flex items-center cursor-pointer text-sm text-left p-3 justify-start rounded-lg gap-x-4 w-[188px]"
          >
            <img src={exit} alt="logout" />
            Logout
          </li>

          <img className="w-[150px] mt-4" src={mango} alt="mango logo" />
        </div>
        {/* SECTION TWO END */}
      </div>
    </div>
  );
};

export default Sidebar;
