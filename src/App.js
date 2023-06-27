import React  from 'react';
import { FaSearch } from 'react-icons/fa';
import { WiHumidity } from 'react-icons/wi'

import { useState } from 'react';
import Card from './Components/Elcard';
import fetchData from './services/api';
import InitialData from './Components/init/Initial.data';
import {IoIosArrowUp} from 'react-icons/io'
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md"
import nature from './nature-3082832.jpg'


import HandleForecast from './Components/Horas';
import { list } from 'postcss';

//FAZER PREVISÕES  FUTURAS


export default function App() {



 
  const [procurar, setProcurar] = useState("");

  const [data , setData] = useState(InitialData);
  const [scrollX, setScrollX] = useState(0);
 
 
  let elda = data.forecast.forecastday[0]?.hour.length;

 
 console.log(elda)



  const handleSubmit = (e) => {
    e.preventDefault();
   fetchData(procurar).then((res)=>{
 
   setData(res)
 
   });
  }


  const handleLeftArrow = () =>{
    let x = scrollX + 150
    if(x > 1800) {
      x = 1800;
  }if(window.innerWidth <= 1232){
    x = 2800
  }
  
    setScrollX(x);
  

}



const handleRightArrow = () =>{
  
  let x = scrollX - 150
  let listw = elda * 135;

  console.log('dsa')

  if(x >= 0){
    x = -50
    console.log(scrollX)
   }if((window.innerWidth - listw) > x){
    x = (window.innerWidth - listw) - 60;
   }

  
  setScrollX(x)
  }
  
  
  
  
  
 
  
  return (
   
    <>
  <div className='h-full w-full relative flex  
                '>


                  
                </div>
     <img className=' w-full absolute h-full  ' src={nature} alt="cam"/>

   



            <form onSubmit={ handleSubmit } className=' mt-72   justify-center  w-full  flex p-4 relative'>
    
    <div className=' h-full bg-opacity-75 rounded-lg  bg-[#858585]  w-max  flex  w-full '>
    <input  type='text' 
      placeholder='cidade'
      className=' font-bold 
      text-white bg-opacity-75 bg-transparent p-3 rounded-lg outline-none w-52 ' 
      value={procurar}
      onChange={(e) => setProcurar(e.target.value)} >
      
      </input>
      <button 
      className='opacity-75  mr-2 rounded-lg  text-black  font-bold'
      type='submit'>
        <FaSearch className='text-white'/>
       
      </button> 
     

    </div>
 
    </form>
    <div className=' relative mt-32    h-max flex justify-center w-full '> 
     
  
 
 <Card className='' data={data} />



 

     </div>
  
   

    </>

  
  )
}