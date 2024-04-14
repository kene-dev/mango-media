import React from 'react'
import { useSelector } from 'react-redux';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';



const Mixedchart = ({data}) => {

const CustomTooltip = ({ payload }) => {
        if ( payload && payload.length) {
          console.log(payload);
          return ( 
            <div className='w-fit px-3 h-auto text-center font-bold bg-[#FFFFFF] rounded-xl'>
              <div className="flex flex-col gap-y-1">
                <p className='text-black text-sm font-medium'>{`${payload[0].value}`}</p>

                { payload[2].value.includes("-") ? (
                  <p className='text-red-500 text-sm font-medium'>{`${payload[2].value}`}</p>
                )
                :

                payload[2].value.includes("+") ? (
                  <p className='text-green-500 text-sm font-medium'>{`${payload[2].value}`}</p>
                ) :
                <p className='text-black text-sm font-medium'>{`${payload[2].value}`}</p>
              }

                
              </div>
            </div> 
          )}
        return null;
      };
  return (
     <ResponsiveContainer width="100%" height={350}>
        <ComposedChart
          data={data}
          margin={{ top: 30, right:5, bottom: 10, left: 10 }}
          barGap={500}
          fontSize={12}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} y={50} />
          <XAxis  tickMargin={10} dataKey="dayOfWeek" axisLine={false} tickLine={false} />
          <YAxis tickCount={8} tickMargin={20} dataKey="sum" domain={[0, 'dataMax']} tickLine={false}  axisLine={false} />

         <Tooltip offset={7} coordinate={{x:100, y:100}} content={CustomTooltip} itemStyle={{color: "black", fontWeight:500, fontSize:20}} wrapperStyle={{outline:"none", boxShadow:"2px 2px 2px black", borderRadius:10}}  contentStyle={{border:"none", backgroundColor:"yellowgreen",  borderRadius:10}} />

          <Bar radius={[10,10,10,10]} dataKey="sum" barSize={60}  fill="#FF6700" />
          <Line dot={{stroke:"#fff",strokeWidth: 2}} dataKey="sum"  stroke="#000" fill="#FF6700" strokeWidth={2} />
          <Line dot={{stroke:"transparent",strokeWidth: 0}} stroke="transparent" dataKey="growthRate"/>
        </ComposedChart>
      </ResponsiveContainer>
  )
}

export default Mixedchart