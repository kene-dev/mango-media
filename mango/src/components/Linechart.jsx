import React from 'react'
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine } from 'recharts'




const Linechart = ({margin, data, height, min, type, stroke, ctik}) => {
   
      const CustomTooltip = ({ payload }) => {
        let date = new Date().getDate()
        let month = new Date().getMonth() + 1;
        let year = new Date().getFullYear()

        if(date < 10){
          date = `0${date}`
        }
        if(month < 10){
          month = `0${month}`
        }
        const today = `${date}-${month}-${year}`;

        if ( payload && payload.length) {
          return ( 
            <div className='w-[8rem] h-auto text-center font-bold bg-[#FFFFFF] rounded-xl'>
              <div className="flex flex-col gap-y-2">
              <p className='text-[#828278] text-sm font-medium'>Engagements</p>
                {`${payload[0].value}`}
                </div>
            </div> 
          )}
        return null;
      };

  return (
    <ResponsiveContainer width="100%" height={height}>
         <LineChart 
          data={data}  
          width={500}
          height={300}
          fontSize={12}
          margin={margin}
          >
        <XAxis dataKey='name' minTickGap={min} padding={{ left: 7, right: 7 }} axisLine={false} tick={ctik} tickMargin={10} tickLine={false} />

        <YAxis  height={20} axisLine={false} tickCount={8} tickMargin={20} tickLine={false}/> 

        <Tooltip offset={7} coordinate={{x:100, y:100}} content={CustomTooltip} itemStyle={{color: "black", fontWeight:500, fontSize:16}} wrapperStyle={{outline:"none", boxShadow:"2px 2px 2px black", borderRadius:10}}  contentStyle={{border:"none", backgroundColor:"#FFFFFF",  borderRadius:10}} />

        <CartesianGrid strokeDasharray="3 3" vertical={false} y={50} />

        <Line type={type}  dataKey="date" stroke={stroke} strokeWidth={2} />

        </LineChart>
    </ResponsiveContainer>
  )
}

export default Linechart