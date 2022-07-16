import React  from 'react';
import "./App.css";
import { useState } from 'react';
import Card from './Components/Elcard';
import fetchData from './services/api';
import InitialData from './Components/init/Initial.data';
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

//FAZER PREVISÕES  FUTURAS


export default function App() {


 
  const [procurar, setProcurar] = useState("");
  const [data , setData] = useState(InitialData);
  const [scrollX, setScrollX] = useState(-400)
  


  console.log(data.forecast)

  const handleSubmit = (e) => {
    e.preventDefault();
   fetchData(procurar).then((res)=>{
 
   setData(res)
 
   });
  }

  const handleLeftArrow = () =>{
   
}

const handleRightArrow = () =>{
   
}



  return (
   <div className='flex flex-col w-full h-screen items-center sm:justify-center p-4' >

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

    <div className='flex m-4'>
      <MdNavigateBefore className='mt-5' onClick={handleLeftArrow} style={{fontSize : 50}} />
      <div className='flex w-xs'>
   
   
     </div>  
      <MdNavigateNext className='mt-5' onClick={handleRightArrow} style={{fontSize : 50}} />
    </div>

   </div>
  )
}