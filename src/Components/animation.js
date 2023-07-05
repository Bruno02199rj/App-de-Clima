import { motion } from "framer-motion"
import React from "react"
import { useState } from "react"



import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles
import 'swiper/css';


export const Animate = ({data}) => {
  const [isOpen, setIsOpen] = useState(false)
  var forecastHour = data.forecast.forecastday[0]?.hour;
  return (
    <motion.nav
      
    
      initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    >
      <div onClick={() => setIsOpen(isOpen => !isOpen)} ></div> 
      <Swiper className='backdrop-blur-sm		'
    
    spaceBetween={50}
    
    
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}

    breakpoints={{
      576: {
        width: 576,
        slidesPerView: 4,
      },
      768: {
        width: 768,
        slidesPerView: 5,
      }}}
    
  >
    {forecastHour.map((t)=><SwiperSlide ><div className='h-max md:w-32 	'>
    <div className='flex  justify-center'>
      
          <img  src={t.condition.icon}></img>   

        </div>

        <div className='flex justify-center'>
        <p className='text-white text-sm'>{t.time.substring(10)}</p> 
        </div>
     
      <div className='text-teal-50 mt-8 flex justify-center'>
      <p className='text-white text-sm '>{t.temp_c}°C</p>
      
      </div>
      
    
    <div className='flex justify-center'>
    <p className='text-white text-sm'>Chuva:{t.chance_of_rain}%</p>
    </div>
      
      
      </div></SwiperSlide>)}

   



  

  </Swiper>
    </motion.nav>
  )
}