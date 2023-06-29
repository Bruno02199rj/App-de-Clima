import React  from 'react';
import { FaSearch } from 'react-icons/fa';
import { WiHumidity } from 'react-icons/wi'

import { useState,useEffect } from 'react';
import Card from './Components/Elcard';
import fetchData from './services/api';
import InitialData from './Components/init/Initial.data';
import {IoIosArrowUp} from 'react-icons/io'
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md"
import nature from './nature-3082832.jpg'
import palace from './palace-530055.jpg'
import ponte from './george-washington-bridge-2098351.jpg'


import HandleForecast from './Components/Horas';
import { list } from 'postcss';

//FAZER PREVISÕES  FUTURAS


export default function App() {

useEffect(() => {
  const random = Math.floor(image.length* Math.random());
  setAleatorio(random)
}, []);
 
  const [procurar, setProcurar] = useState("");
  const [aleatorio,setAleatorio] = useState()
  const [data , setData] = useState(InitialData);
  const [scrollX, setScrollX] = useState(0);
  const [image,setImage] = useState([
    palace,nature,ponte
  ]);



  let elda = data.forecast.forecastday[0]?.hour.length;
  
 

 
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

console.log(data.location.localtime)


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
 
    
     <img className=' absolute bg-contain bg-center h-full  w-full  ' src={image[aleatorio]} alt="cam"/>
    <div className='h-screen w-full absolute  bg-gradient-to-b from-transparent to-black'></div>
     <form onSubmit={ handleSubmit } className='  relative  flex justify-center  w-full  p-4 '>
          
          <div className='mt-8   bg-opacity-75 rounded-lg   bg-[#858585]  w-max  flex  w-full '>
          
          <input  type='text' 
            placeholder='pesquisar'
            className=' font-bold 
            text-white bg-opacity-100 bg-transparent p-3 rounded-lg outline-none w-52 ' 
            value={procurar}
            onChange={(e) => setProcurar(e.target.value)} >
            
            </input>
            <button 
            className='opacity-100 mr-2 rounded-lg  text-black  font-bold'
            type='submit'>
              <FaSearch className='text-white'/>
             
            </button> 
           
      
          </div>
       
          </form>
          <div className=' relative  h-full bg-gradient-to-b from-cyan-500 to-blue-500    h-max  w-full '> 
           
        
       
      
      
      
      
       
      
           </div>
        
        
      
        
      
           <div class="pt-[23rem]    relative w-full ">
      
      <Card data={data}/>
        </div>



    </>

  
  )
}