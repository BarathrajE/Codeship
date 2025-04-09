import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Section_1 = () => {
  return (
    <div className="">
      <Swiper
        className="mySwiper py-4 " 
        id="swiper_1"
        slidesPerView={5}
        loop={true}
        speed={11000}
        autoplay={{
          delay: 2500
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          650: { slidesPerView: 2 },
          983: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
          1629: { slidesPerView: 5 },
        }}
      >
        <SwiperSlide id="swiper-slide_1">TOYOTA</SwiperSlide>
        <SwiperSlide id="swiper-slide_1">Ubar</SwiperSlide>
        <SwiperSlide id="swiper-slide_1">Amazon</SwiperSlide>
        <SwiperSlide id="swiper-slide_1">Coinbase</SwiperSlide>
        <SwiperSlide id="swiper-slide_1">Credit karma</SwiperSlide>
        <SwiperSlide id="swiper-slide_1">TOYOTA</SwiperSlide>
        <SwiperSlide id="swiper-slide_1">Ubar</SwiperSlide>
        <SwiperSlide id="swiper-slide_1">Amazon</SwiperSlide>
        <SwiperSlide id="swiper-slide_1">Coinbase</SwiperSlide>
        <SwiperSlide id="swiper-slide_1">Credit karma</SwiperSlide>
      </Swiper>
    </div>

    
  );
};

export default Section_1;
