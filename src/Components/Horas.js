import React, { useState } from 'react';



const HandleForecast = ({data}) =>{



  return(
    <>
    {data?.map((t)=>{
       console.log(data)
      return (<div className='bg-blue-900  m-1 p-3 w-32 h-42 rounded-xl  ' key={t.time}>
       
        <div className='flex justify-center'>
      
          <img  src={t.condition.icon}></img>   

        </div>

        <div className='flex justify-center'>
        <p className='text-orange-300'>{t.time.substring(10)}</p> 
        </div>
     
      <div className='text-teal-50 mt-8 flex justify-center'>
      <p className='text-orange-300'>{t.temp_c}°C</p>
      
      </div>
      
    
    <div className='flex justify-center'>
    <p className='text-orange-300'>Chuva:{t.chance_of_rain}%</p>
    </div>
    
      </div>);
           
    })}
    
    </>
    
  );
 
}
export default HandleForecast;
 