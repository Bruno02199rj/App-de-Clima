
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles
import 'swiper/css';

export const Slider = ({data})=>{
var forecastHour = data.forecast.forecastday[0]?.hour;
  console.log(forecastHour)



  return(
    <Swiper
    
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
    {forecastHour.map((t)=><SwiperSlide><div className='h-max w-32 backdrop-blur-2xl	'>
    <div className='flex justify-center'>
      
          <img  src={t.condition.icon}></img>   

        </div>

        <div className='flex justify-center'>
        <p className='text-white'>{t.time.substring(10)}</p> 
        </div>
     
      <div className='text-teal-50 mt-8 flex justify-center'>
      <p className='text-white'>{t.temp_c}°C</p>
      
      </div>
      
    
    <div className='flex justify-center'>
    <p className='text-white'>Chuva:{t.chance_of_rain}%</p>
    </div>
      
      
      </div></SwiperSlide>)}

   



  

  </Swiper>

  )


}
  