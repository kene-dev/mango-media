import React, { useState, useEffect } from "react";
import Linechart from "../components/Linechart";
import Barchart from "../components/Barchart";
import location from "../assets/location.svg";
import drop from "../assets/drop.svg";
import dropp from "../assets/dropp.svg";
import Mixedchart from "../components/Mixedchart";
import { useDispatch, useSelector } from "react-redux";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from "recharts";

const Bianalysis = () => {
  const { camFeed } = useSelector((state) => state.feed);
  const feed = useSelector((state) => state.feed);

  const [showWeek, setShowWeek] = useState(true);
  const [showMonth, setShowMonth] = useState(false);
  const [filter, setFilter] = useState(false);
  // const [summ, setSumm] = useState(false)

  const margin = { top: 20, right: 30, bottom: 0, left: 20 };
  const height = 230;
  const barHeight = 310;

  const [width, setWidth] = useState("100%");

  const dataFilter = (option) => {
    if (option === "month") {
      setShowWeek(false);
      setShowMonth(true);
      setFilter(!filter);
    } else {
      setShowWeek(true);
      setShowMonth(false);
      setFilter(!filter);
    }
  };

  useEffect(() => {
    const handleWidth = () => {
      const totalLabels = 4;
      if (totalLabels > 3) {
        const newWidth = 600 + (totalLabels - 7) * 30;
        setWidth(`${newWidth}px`);
      } else {
        setWidth("100%");
      }
    };
    handleWidth();
  }, []);

  const CustomizedAxisTick = ({ x, y, payload }) => (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={-4} dy={16} textAnchor="end" fill="#666">
        {payload.value}
      </text>
      {payload.value < 12 ? (
        <text x={17.7} y={-4} dy={16} textAnchor="end" fill="#666">{`am`}</text>
      ) : (
        <text x={17.7} y={-4} dy={16} textAnchor="end" fill="#666">{`pm`}</text>
      )}
    </g>
  );

  const CustomTooltip = ({ payload }) => {
    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();

    if (date < 10) {
      date = `0${date}`;
    }
    if (month < 10) {
      month = `0${month}`;
    }
    const today = `${date}-${month}-${year}`;

    if (payload && payload.length) {
      return (
        <div className="w-[8rem] h-auto text-center font-bold bg-[#FFFFFF] rounded-xl">
          <div className="flex flex-col gap-y-2">
            <p className="text-[#828278] text-sm font-medium">{today}</p>
            {`${payload[0].value}`}
          </div>
        </div>
      );
    }
    return null;
  };

  if (feed.isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        Loading Data.....
      </div>
    );
  }

  if (feed) {
    // const dataArra = Object.entries(camFeed?.growth_rate_dict?.sum).map(
    //   ([date, sum]) => ({
    //     date,
    //     dayOfWeek: feed.camFeed.growth_rate_dict.week_day_string[date],
    //     sum,
    //     growthRate: feed.camFeed.growth_rate_dict.growth_rate[date],
    //   })
    // );

    // const formattedData = Object.entries(
    //   camFeed?.day_night_engagement?.day
    // ).map(([date, dayValue]) => ({
    //   name: date,
    //   day: dayValue,
    //   night: camFeed.day_night_engagement.night[date],
    // }));
    // const lastSevenDays = formattedData.slice(-7);

    // const dataArray = Object.entries(camFeed?.hourly_engagement).map(
    //   ([date, values]) => ({
    //     date,
    //     values,
    //   })
    // );
    // const lastData = dataArray[dataArray.length - 1];
    // const newValue = Object.entries(lastData.values).map(([hour, values]) => ({
    //   name: hour,
    //   date: values,
    // }));

    // const monthData = Object.entries(camFeed?.weekly_engagement).map(
    //   ([week, values]) => ({
    //     name: "week " + week,
    //     value: values,
    //   })
    // );
    // const lastSevenWeeks = monthData.slice(-7);
    const lastSevenWeeks = [
      { week: 1, value: 300 },
      { week: 2, value: 300 },
    ];

    return (
      <div className="h-full w-full lg:px-8 px-3">
        {/* TOP SECTION HEADER */}
        <div className="flex items-center justify-between mt-5">
          <p className="lg:text-2xl text-lg font-bold ">Bi Analysis</p>
          <div className="flex items-center lg:ml-14 text-sm w-auto space-x-3 h-auto lg:justify-evenly p-2 lg:px-7 rounded-2xl bg-[#000]">
            <img width={12} height={12} src={location} alt="icon" />
            <div className="flex items-center space-x-2">
              <p className="text-white text-sm"> Locations:</p>
              <button className="outline-none flex items-center space-x-2 bg-transparent text-sm text-[#FF6700] p-0">
                <p>All</p>
                <img src={drop} width={12} height={12} alt="drop" />
              </button>
            </div>
          </div>
        </div>
        {/* TOP SECTION HEADER END */}

        {/* CHART SECTION WRAPPER BEGIN */}
        <div className="flex flex-col w-full h-full pt-5 gap-7">
          {/* LINCHART SECTION BEGIN */}
          <div className="w-full rounded-xl bg-white p-3 hover:shadow-sm hover:shadow-[#000] duration-300">
            <h1 className="font-bold text-base">Daily Peak Periods</h1>

            <ResponsiveContainer width="100%" height={height}>
              <LineChart
                data={lastSevenWeeks}
                width={500}
                height={300}
                fontSize={12}
                margin={{ top: 20, right: 30, bottom: 0, left: 20 }}
              >
                <XAxis
                  dataKey="name"
                  minTickGap={1}
                  padding={{ left: 7, right: 7 }}
                  axisLine={false}
                  tick={<CustomizedAxisTick />}
                  tickMargin={10}
                  tickLine={false}
                />

                <YAxis
                  height={20}
                  axisLine={false}
                  tickCount={8}
                  tickMargin={20}
                  tickLine={false}
                />

                <Tooltip
                  offset={7}
                  coordinate={{ x: 100, y: 100 }}
                  content={CustomTooltip}
                  itemStyle={{ color: "black", fontWeight: 500, fontSize: 16 }}
                  wrapperStyle={{
                    outline: "none",
                    boxShadow: "2px 2px 2px black",
                    borderRadius: 10,
                  }}
                  contentStyle={{
                    border: "none",
                    backgroundColor: "#FFFFFF",
                    borderRadius: 10,
                  }}
                />

                <CartesianGrid strokeDasharray="3 3" vertical={false} y={50} />

                <Line
                  type="monotone"
                  dot={{ stroke: "#FF6700", strokeWidth: 5 }}
                  dataKey="date"
                  stroke="#FF6700"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          {/* LINCHART SECTION END */}

          <div className="flex items-center gap-7 w-full">
            {/* BARCHART SECTION BEGIN */}
            <div className="bg-white p-4 h-full flex-grow rounded-xl hover:shadow-sm hover:shadow-[#000]">
              <div className="flex items-center lg:justify-between justify-evenly py-2">
                <p className="font-bold text-sm lg:text-base capitalize  text-black">
                  Engagements
                </p>

                <div className="flex  lg:space-x-8">
                  <div className="flex items-center space-x-2">
                    <div className="w-[20px] h-[20px] bg-black rounded-md"></div>
                    <p className="font-medium text-xs">Day</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className="w-[20px] h-[20px] bg-[#FF6700] rounded-md"></div>
                    <p className="font-medium text-xs">Night</p>
                  </div>
                </div>

                <div className="relative cursor-pointer">
                  <div
                    onClick={() => setFilter(!filter)}
                    className="w-auto h-auto flex items-center lg:space-x-3 rounded-lg p-1 bg-[#11111147] lg:p-2"
                  >
                    {showWeek && (
                      <p className="text-xs">
                        Show{" "}
                        <span className="text-[#FF6700] text-xs">
                          for the Week
                        </span>
                      </p>
                    )}
                    {showMonth && (
                      <p className="text-xs">
                        Show{" "}
                        <span className="text-[#FF6700] text-xs">
                          for the Month
                        </span>
                      </p>
                    )}
                    <img
                      src={dropp}
                      width={12}
                      height={12}
                      alt="drop"
                      className="object-cover"
                    />
                  </div>
                  {filter && (
                    <ul className="absolute bottom-0 w-max h-max py-3  top-9 rounded-sm bg-[#11111155] z-20">
                      <li
                        onClick={() => dataFilter("month")}
                        className="text-xs  p-2"
                      >
                        Show{" "}
                        <span className="text-[#FF6700] text-xs">
                          for the Month
                        </span>
                      </li>
                      <li
                        onClick={() => dataFilter("week")}
                        className="text-xs  p-2"
                      >
                        Show{" "}
                        <span className="text-[#FF6700] text-xs">
                          for the week
                        </span>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
              <Barchart
                barData={showWeek ? lastSevenWeeks : lastSevenWeeks}
                margin={margin}
                barHeight={barHeight}
              />
            </div>
            {/* BARCHART SECTION END */}

            {/* SIDE LINECHART SECTION BEGIN */}
            <div className="flex flex-col w-[310px] h-full bg-white px-4 rounded-xl hover:shadow-sm hover:shadow-[#000]">
              <div className="flex items-center justify-between pt-4">
                <p className="font-bold text-base capitalize  text-black">
                  Growth Rate
                </p>

                <div className="w-auto h-auto rounded-lg bg-[#11111147] flex items-center space-x-3 p-2">
                  <p className="text-xs">
                    Show <span className="text-[#FF6700]">for the Week</span>
                  </p>
                  <img src={dropp} width={12} height={12} alt="drop" />
                </div>
              </div>

              <div className="w-full overflow-x-scroll">
                <div style={{ width: width }}>
                  <Mixedchart data={lastSevenWeeks} />
                </div>
              </div>
            </div>

            {/* SIDE LINECHART SECTION END */}
          </div>
        </div>
        {/* CHART SECTION WRAPPER END */}
      </div>
    );
  }
};

export default Bianalysis;
