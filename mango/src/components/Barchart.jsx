import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip,} from 'recharts'




const Barchart = ({margin, barData, barHeight, min}) => {
   

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
              <p className='text-[#828278] text-sm font-medium'> {`${payload[1].value}`}</p>
                {`${payload[0].value}`}
              </div>
            </div> 
          )}
        return null;
      };

  return (
    <ResponsiveContainer width="100%" height={barHeight}>
         <BarChart 
          data={barData}  
          fontSize={12}
          margin={margin}
          >
        <YAxis axisLine={false} tickMargin={20} tickCount={8} tickLine={false}/> 
        <XAxis dataKey='name' minTickGap={1} padding={{ left: 7, right: 7 }} axisLine={false} tickMargin={5} tickLine={false} />
        <Tooltip offset={7} cursor={false}  coordinate={{x:100, y:100}}  itemStyle={{color: "black", fontWeight:500, fontSize:15}} wrapperStyle={{outline:"none", boxShadow:"2px 2px 2px black", borderRadius:10}}  contentStyle={{border:"none", backgroundColor:"#ffffff",  borderRadius:10}} />
        <CartesianGrid strokeDasharray="3 3" vertical={false} y={50} />
        <Bar radius={[20,20,20,20]} barSize={10} dataKey="day" fill="#000" strokeWidth={2} />
        <Bar radius={[20,20,20,20]} barSize={10}  dataKey="night" fill="#FF6700" strokeWidth={2} />
        <Bar radius={[20,20,20,20]} barSize={15}  dataKey="value" fill="#FF6700" strokeWidth={2} />
        </BarChart>
    </ResponsiveContainer>
  )
}

export default Barchart