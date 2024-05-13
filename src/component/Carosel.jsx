
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

import bgimg1 from '../assets/image/carosel.png.jpg'
import bgimg2 from '../assets/image/carosel2.png.jpg'
import bgimg3 from '../assets/image/carosel3.png.jpg'

export default function Carosel() {
  return (
    <div className='lg:px-6 py-10 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Slide image={bgimg1}></Slide> </SwiperSlide>
        <SwiperSlide><Slide image={bgimg2}></Slide> </SwiperSlide>
        <SwiperSlide><Slide image={bgimg3}></Slide> </SwiperSlide>



      </Swiper>
    </div >
  );
}
