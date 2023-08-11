import React  from 'react';
import { FaSearch } from 'react-icons/fa';
import { WiHumidity } from 'react-icons/wi'
import {AiOutlineArrowUp} from 'react-icons/ai'
import  { Slider } from './Components/Slider';




import { useState,useEffect } from 'react';
import Card from './Components/Elcard';
import fetchData from './services/api';
import InitialData from './Components/init/Initial.data';
import {IoIosArrowUp} from 'react-icons/io'
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md"
import nature from './nature-3082832.jpg'
import palace from './palace-530055.jpg'
import ponte from './george-washington-bridge-2098351.jpg'
import  mail from './o-email.png'
import whatsapp from './icons8-whatsapp-50.png'
import github from'./icons8-github-26.png'
import { Animate } from './Components/animation';


//FAZER PREVISÕES  FUTURAS


export default function App() {

useEffect(() => {
  const random = Math.floor(image.length* Math.random());
  setAleatorio(random)
  
}, []);
 
  const [procurar, setProcurar] = useState("");
  const [aleatorio,setAleatorio] = useState()
  const [data , setData] = useState(InitialData);
  const [show, setShow] = useState(false);

  const [image,setImage] = useState([
    palace,nature,ponte
  ]);




 

 
  const handleSubmit = (e) => {

    e.preventDefault();
   fetchData(procurar).then((res)=>{
 
   setData(res)
   });
  }


  console.log(show)
  
  
 
  
  return (
   
    <>
 
    
     <img className=' absolute  aling-middle bg- h-full  w-full  ' src={image[aleatorio]} alt="cam"/>
    <div className='h-full w-full absolute  bg-gradient-to-b from-transparent to-black'></div>
     <form onSubmit={ handleSubmit } className='  relative  h-full  flex justify-center  w-full  pt-[8REM] '>


          <div className='mt-4   bg-opacity-50 rounded-lg   bg-[#858585]  w-max  flex  w-full '>
          
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
        
           <div class="pt-[8rem]  flex justify-center relative w-full ">
           <AiOutlineArrowUp onClick={()=>setShow(prevShow => !prevShow)} className='hover:scale-125 text-white justify-center h-8 w-24'/>  
       
           </div>
         
           
    {show? <div>  <p className='animate-pulse text-gray-400 text-sm flex justify-center relative w-full relative'> Arraste para o lado  </p><Animate data={data}/></div> :
    
    
    <Card  data={data}/>
    }
           <div class="  md:flex md:justify-center relative w-full ">
          
          
            <div className='h-max flex  justify-center md:flex-row-reverse w-full   md:w-52 mt-24 mt-12'>
           
           <img src={mail} className=' h-5 w-5 '/>
           <img src={whatsapp} className='bg-transparent mx-4 h-5 w-5 '/>
           <img src={github} className='bg-transparent h-5 w-5'/>
            </div>
           </div>

    </>

  
  )
}