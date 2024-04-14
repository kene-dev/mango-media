import React, { useEffect, useState } from "react";
import clock from "../assets/clock.svg";
import Linechart from "../components/Linechart";
import dropp from "../assets/dropp.svg";
import { useDispatch, useSelector } from "react-redux";
import { getChartData } from "../features/chartData/chartSlice";
import DoughnutChart from "../components/Doughnut";
import { fetchClient } from "../features/client/clientSlice";

const Overview = () => {
  const feed = useSelector((state) => state.feed);
  const dispatch = useDispatch();
  const abeg = feed?.camFeed.daily_engagement;

  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    dispatch(getChartData());
    //  dispatch(fetchClient())
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = dateTime.toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  const margin = { top: 60, right: 80, bottom: 0, left: 30 };
  const height = 400;
  const type = "monotone";
  const stroke = "#FF6700";

  // if(feed.isLoading){
  //   return (
  //     <div className='w-full h-screen flex items-center justify-center'>
  //       Loading Data.....
  //     </div>
  //   )
  // }

  if (!abeg) {
    // const data = Object.entries(abeg).map(([date, value]) => ({
    //   name: date,
    //   date: value,
    // }));

    const lastSevenDays = [
      { name: "something1", value: 200 },
      { name: "something1", value: 500 },
      { name: "something1", value: 800 },
      { name: "something1", value: 400 },
    ];

    useEffect(() => {
      if (feed.camFeed.length) {
        console.log(feed.camFeed);
      }
    }, [feed.camfeed]);
    // console.log(feed?.camFeed);

    return (
      <div className="flex flex-col w-full px-10">
        {/* TOP LAYER START */}
        <div className="grid grid-cols-3 mt-7 w-full">
          <div className="col-span-1">
            <p className="font-bold text-2xl ">Overview</p>
          </div>
          <div className="col-span-2">
            <div className="flex items-center ml-14 text-sm w-[245px] h-[44px] justify-evenly rounded-2xl bg-[#FFFFFF]">
              <img width={25} height={25} src={clock} alt="icon" />
              <p> 13:00 PM Today Jan, 05 </p>
              {/* <p>{dateTime.toLocaleTimeString()}</p>
              <p>{formattedDate}</p> */}
            </div>
          </div>
        </div>
        {/* TOP LAYER END */}

        {/* SECOND LAYER START */}
        <div className="grid grid-cols-3 w-full h-auto mt-6 gap-x-10">
          <div className="flex flex-col gap-3">
            <div className="w-full h-[160px] bg-[#ffffff] rounded-lg p-5 hover:shadow-sm hover:shadow-[#000] duration-300">
              <p className="text-sm">Total Engagements</p>
              <div className="flex flex-col items-center justify-center h-full my-auto">
                <h1 className="text-[#111111] text-5xl font-bold">
                  {feed?.camFeed?.total_engagement}
                </h1>
                <p className="text-[#ff66006e]">People reached</p>
              </div>
            </div>

            <div className="w-full flex items-center gap-10">
              <div className="w-full h-[190px] bg-[#ffffff] rounded-lg p-5 hover:shadow-sm hover:shadow-[#000] duration-300">
                <p className="text-sm">Vehicle </p>
                <div className="flex flex-col items-center justify-center h-full my-auto">
                  <h1 className="text-[#111111] text-5xl font-bold">
                    {feed?.camFeed?.total_engagement}
                  </h1>
                  <p className="text-[#ff66006e]"> 75,000</p>
                </div>
              </div>

              <div className="w-full h-[190px] bg-[#ffffff] rounded-lg p-5 hover:shadow-sm hover:shadow-[#000] duration-300">
                <p className="text-sm">People</p>
                <div className="flex flex-col items-center justify-center h-full my-auto">
                  <h1 className="text-[#111111] text-5xl font-bold">
                    {feed?.camFeed?.total_engagement}
                  </h1>
                  <p className="text-[#ff66006e]">50,000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-[363px] bg-[#ffffff] rounded-lg p-5 hover:shadow-sm hover:shadow-[#000] duration-300">
            <p className="text-sm">Optimal Engagement Time</p>
            <div className="flex flex-col items-center justify-center h-full my-auto">
              <h1 className="text-[#ff66006e] text-3xl font-bold">
                {!feed ? feed?.camFeed?.best_performing_time : "No Data..."}
              </h1>
            </div>
          </div>

          <div className="w-full h-full bg-[#ffffff] rounded-lg p-3 hover:shadow-sm hover:shadow-[#000] duration-300">
            <p className="text-sm">Location</p>
            <DoughnutChart />
          </div>
        </div>
        {/* SECOND LAYER END */}

        {/* THIRD LAYER START */}
        <div className="bg-white rounded-lg w-full h-full grid my-6  p-5 hover:shadow-sm hover:shadow-[#000] duration-300">
          <div className="flex items-center justify-between my-1">
            <p className="font-bold text-sm capitalize  text-black">
              Engagements
            </p>

            <div className="w-auto h-auto flex items-center space-x-3 rounded-lg bg-[#11111147] p-2">
              <p className="text-xs">
                Show{" "}
                <span className="text-[#FF6700] text-xs">for the Week</span>
              </p>
              <img src={dropp} width={12} height={12} alt="drop" />
            </div>
          </div>

          <Linechart
            data={lastSevenDays}
            margin={margin}
            stroke={stroke}
            type={type}
            height={height}
          />
        </div>
        {/* THIRD LAYER END */}
      </div>
    );
  }
};

export default Overview;
