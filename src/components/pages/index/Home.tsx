import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MainCountdown } from '@/components/common/index/MainCountdown';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

type CountInfo = {
  departureTime: string;
  hasDeparted: boolean;
};

export const Home = () => {
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
    <Swiper
      centeredSlides={true}
      className="mySwiper"
      direction="vertical"
      modules={[Pagination]}
      pagination={{
        clickable: true,
      }}
      slidesPerView={'auto'}
      spaceBetween={30}
    >
      {countInfoList.map((info, index) => {
        return (
          <SwiperSlide key={index}>
            <MainCountdown departureTime={info.departureTime} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
