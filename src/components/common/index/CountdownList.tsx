import type { FC } from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MainCountdown } from './MainCountdown';
import 'swiper/css';
import 'swiper/css/pagination';
import type { DepartureTimesType } from '@/types/DepartureTimesType';

type Props = {
  departureTimes: DepartureTimesType | undefined;
};

export const CountdownList: FC<Props> = (props) => {
  const { departureTimes } = props;

  const now = new Date();
  let displayCount = 0;

  // resで返ってくるのが"5-51"のように型Dateではないので、ここでDateに変換
  const createDate = (hours: number, minutes: number): Date => {
    const newDate: Date = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      hours,
      minutes
    );
    return newDate;
  };

  const editTimes = (): (Date | undefined)[] | undefined => {
    console.log('departureTimes:', departureTimes);
    if (!departureTimes || !departureTimes.data.times) return;

    const times: string[][] = Object.entries(departureTimes.data.times).map((time) => time[1]);
    if (!times[0]) return;

    const newTimes: (Date | undefined)[] = times[0].map((time) => {
      const splitTimes: number[] = time.split('-').map((v) => Number(v));

      // [0]: hour, [1]: minute
      if (!splitTimes[0] || !splitTimes[1]) return;
      return createDate(splitTimes[0], splitTimes[1]);
    });

    return newTimes;
  };

  const newDepartureTimes = editTimes();

  return (
    <Swiper
      centeredSlides={true}
      direction="vertical"
      modules={[Pagination]}
      pagination={{
        clickable: false,
      }}
      slidesPerView={'auto'}
      spaceBetween={30}
    >
      {newDepartureTimes?.map((departureTime, index) => {
        if (!departureTime) return;
        if (now > departureTime) return;

        displayCount++;
        if (displayCount > 10) return;

        return (
          <SwiperSlide key={index}>
            <MainCountdown departureTime={departureTime} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
