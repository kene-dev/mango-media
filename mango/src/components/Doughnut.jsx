import React from "react";
import { useState } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import { useSelector } from "react-redux";

const DoughnutChart = () => {
  const { camFeed, isLoading } = useSelector((state) => state.feed);
  const info = camFeed.location_engagement;
  const COLORS = ["#FF6700", "#000000", "#FFC700", "#A325A6", "#FF5894"];

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        Loading Chart Data.....
      </div>
    );
  }

  if (!info) {
    // const dataArray = Object.entries(info).map(([name, value]) => ({ name, value }));

    const dataArray = [
      { name: "Location 1", value: 200 },
      { name: "Location 2", value: 500 },
      { name: "Location 3", value: 800 },
      { name: "Location 6", value: 100 },
      { name: "Location 7", value: 50 },
    ];

    return (
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            dataKey="value"
            data={dataArray}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={2}
            label
          >
            {dataArray.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend align="right" verticalAlign="middle" layout="vertical" />
        </PieChart>
      </ResponsiveContainer>
    );
  }
};
export default DoughnutChart;
