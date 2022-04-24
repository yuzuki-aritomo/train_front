import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

type CountInfo = {
  departureTime: string;
  hasDeparted: boolean;
};

const Test = () => {
  const countInfoList: CountInfo[] = [
    { departureTime: '09:10', hasDeparted: true },
    { departureTime: '10:10', hasDeparted: false },
    { departureTime: '11:10', hasDeparted: false },
    { departureTime: '12:10', hasDeparted: false },
    { departureTime: '13:10', hasDeparted: false },
    { departureTime: '14:10', hasDeparted: false },
    { departureTime: '15:10', hasDeparted: false },
    { departureTime: '16:10', hasDeparted: false },
    { departureTime: '17:10', hasDeparted: false },
    { departureTime: '18:10', hasDeparted: false },
  ];

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={50}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {countInfoList.map((info, index) => {
          return <SwiperSlide key={index}>{info.departureTime}</SwiperSlide>;
        })}
      </Swiper>
    </>
  );
};

export default Test;
