import React, { useState } from 'react';



const HandleForecast = ({data}) =>{



  return(
    <>
     {data?.map((t)=>{
  console.log(t)
           
    })}
    
    </>
    
  );
 
}
    
    
    

export default HandleForecast;
 