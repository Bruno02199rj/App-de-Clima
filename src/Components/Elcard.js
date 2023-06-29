import React from 'react';
import { WiHumidity } from 'react-icons/wi';
import {CiTempHigh} from 'react-icons/ci'


const Card = ({data}) => {

    
    return (
        <div className=' relative items-stretch h-full w-full  flex     '>
          
            <CiTempHigh className='h-12   self-center w-12 text-white'/>
            <div> <span className='text-gray-50 text-8xl'>{data.current.temp_c}</span>
            <span className=' text-gray-50 text-2xl mt-2'>°C</span></div>
           
        <div className='mt-4 px-4  self-center'>
            <span className=' items-center block text-xl font-bold text-white'>{data.location.region}</span> 
            <span className=' text-white text-sm font-medium'>{data.location.name}</span>
            <span className='text-white block'>{data.location.localtime}</span>
        </div>

        <div className='font-bold text-slate-700 flex  mb-2'>
            

        </div>

        <div className='flex   self-center justify-center flex-col items-center'>
        <WiHumidity  className='h-12 w-24 text-white'/>
           
            <span className='text-white self-center  font-medium'> {data.current.humidity} %</span>
          
            <span className='text-white font-medium'>{data.current.condition.text}</span>
        </div>

        <img className='block self-center w-24 h-24' src={data.current.condition.icon}></img>

        </div>
    );
}

export default Card;