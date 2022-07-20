import React from 'react';

const Card = ({data}) => {

    
    return (
        <div className=' grid justify-items-center  w-1/2   mt-2 mb-4 '>
            <img className='block ' src={data.current.condition.icon}></img>
            <div> <span className='text-gray-50 text-8xl'>{data.current.temp_c}</span>
            <span className=' text-gray-50 text-2xl mt-2'>°C</span></div>
           
        <div>
            <span className='text-amber-400 items-center block text-xl font-bold text-slate-700'>{data.location.region}</span> 
            <span className='text-amber-400 text-slate-700 text-sm ffont-medium'>{data.location.name}</span>
        </div>

        <div className='font-bold text-slate-700 flex mt-4 mb-2'>
            

        </div>

        <div className='flex justify-center flex-col items-center'>
            
            <span className='text-gray-50 font-medium'>{data.current.condition.text}</span>
            <span className='text-gray-50 font-medium'>Humidade: {data.current.humidity} %</span>
        </div>



        </div>
    );
}

export default Card;