import React  from 'react';

import { useState } from 'react';
import Card from './Components/Elcard';
import fetchData from './services/api';
import InitialData from './Components/init/Initial.data';
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";


import HandleForecast from './Components/Horas';

//FAZER PREVISÕES  FUTURAS


export default function App() {


 
  const [procurar, setProcurar] = useState("");

  const [data , setData] = useState(InitialData);
  const [scrollX, setScrollX] = useState(0);
 
  
  






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
  }
    setScrollX(x);
}



const handleRightArrow = () =>{
  
  let x = scrollX - 150

  if(x >= 0){
    x = -150
    console.log(scrollX)
   }if(scrollX === -1800){
    x = -1800;
   }
  
  setScrollX(x)
  }


   


  
 

  return (
   <div className='bg-gradient-to-r from-sky-500 to-indigo-500 flex flex-col w-full h-screen items-center sm:justify-center p-4 overflow-hidden' >

    <form onSubmit={ handleSubmit } className='fixed bottom-0 w-full flex p-4 sm:relative'>
      <input 
      type='text' 
      placeholder='cidade'
      className='p-3 rounded-lg outline-none w-full flex-1' 
      value={procurar}
      onChange={(e) => setProcurar(e.target.value)}
      />
      <button 
      className='bg-blue-600 p-3 rounded-lg ml-3 text-white font-bold'
      type='submit'>
        Pesquisar
      </button>
    </form>
 
    <Card data={data}/>
    <div className='flex overflow-hidden'>
    <MdNavigateBefore className='mt-5' onClick={handleLeftArrow} style={{fontSize : 50}} />
    <MdNavigateNext className='mt-5' onClick={handleRightArrow} style={{fontSize : 50}} />
    </div>
    <div className='flex m-4 '>
            <div className='flex ease-in duration-300 overflow-hidden '  style={{
            marginLeft: scrollX,}}>
            <HandleForecast data={data.forecast.forecastday[0]?.hour}/>
            </div>  
    </div>

    

    </div>


  
  )
}