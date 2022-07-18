import React, { useState } from 'react';



const HandleForecast = ({data}) =>{



  return(
    <>
    {data?.map((t)=>{
       console.log(data)
      return (<div className='bg-gradient-to-r from-teal-300  to-gray-600 m-1 p-3 w-32 h-52 ' key={t.time}>
       
        <div className='flex justify-center'>
      
          <img  src={t.condition.icon}></img>   

        </div>

        <div className='flex justify-center'>
        <p className='text-stone-900'>{t.time.substring(10)}</p> 
        </div>
     
      <div className='text-teal-50 mt-8 flex justify-center'>
      <p className='text-stone-900'>{t.temp_c}°C</p>
      
      </div>
      
    
    <div className='flex justify-center'>
    <p className='text-stone-900'>Chuva:{t.chance_of_rain}%</p>
    </div>
    
      </div>);
           
    })}
    
    </>
    
  );
 
}
export default HandleForecast;
 