import React, { useState } from 'react';
import styled from 'styled-components';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MainCountdown } from '@/components/common/index/MainCountdown';
import 'swiper/css';
import 'swiper/css/pagination';
import { OtherStation } from '@/components/common/index/OtherStation';
import { SelectedStation } from '@/components/common/index/SelectedStation';

type StationsInfoType = {
  departureTimes: {
    departureTime: Date;
    hasDeparted: boolean;
  }[];
  stationName: string;
  lineName: string;
};

export const Home = () => {
  // demo deta
  const createDate = (days: number, hours: number, minutes: number): Date => {
    const newDate: Date = new Date(2022, 4 - 1, days, hours, minutes);
    return newDate;
  };

  const stationsInfo: StationsInfoType[] = [
    {
      departureTimes: [
        { departureTime: createDate(25, 9, 1), hasDeparted: true },
        { departureTime: createDate(25, 10, 1), hasDeparted: false },
        { departureTime: createDate(25, 11, 1), hasDeparted: false },
        { departureTime: createDate(25, 12, 1), hasDeparted: false },
        { departureTime: createDate(25, 13, 1), hasDeparted: false },
        { departureTime: createDate(25, 14, 1), hasDeparted: false },
        { departureTime: createDate(25, 15, 1), hasDeparted: false },
        { departureTime: createDate(25, 16, 1), hasDeparted: false },
        { departureTime: createDate(25, 17, 1), hasDeparted: false },
        { departureTime: createDate(25, 18, 1), hasDeparted: false },
      ],
      stationName: '梅田駅',
      lineName: '御堂筋線',
    },
    {
      departureTimes: [
        { departureTime: createDate(26, 19, 1), hasDeparted: true },
        { departureTime: createDate(26, 20, 1), hasDeparted: false },
        { departureTime: createDate(26, 21, 1), hasDeparted: false },
        { departureTime: createDate(26, 22, 1), hasDeparted: false },
        { departureTime: createDate(26, 23, 1), hasDeparted: false },
        { departureTime: createDate(26, 24, 1), hasDeparted: false },
        { departureTime: createDate(26, 1, 1), hasDeparted: false },
        { departureTime: createDate(26, 2, 1), hasDeparted: false },
        { departureTime: createDate(26, 3, 1), hasDeparted: false },
        { departureTime: createDate(26, 4, 1), hasDeparted: false },
      ],
      stationName: '京都駅',
      lineName: 'JR京都線',
    },
    {
      departureTimes: [
        { departureTime: createDate(27, 5, 1), hasDeparted: true },
        { departureTime: createDate(27, 6, 1), hasDeparted: false },
        { departureTime: createDate(27, 7, 1), hasDeparted: false },
        { departureTime: createDate(27, 8, 1), hasDeparted: false },
        { departureTime: createDate(27, 9, 1), hasDeparted: false },
        { departureTime: createDate(27, 10, 1), hasDeparted: false },
        { departureTime: createDate(27, 11, 1), hasDeparted: false },
        { departureTime: createDate(27, 12, 1), hasDeparted: false },
        { departureTime: createDate(27, 13, 1), hasDeparted: false },
        { departureTime: createDate(27, 14, 1), hasDeparted: false },
      ],
      stationName: '東梅田駅',
      lineName: '谷町線',
    },
  ];

  // flagは駅コードになる
  const [activeNum, setActiveNum] = useState<number>(1);

  const TabPanel: React.FC<{ index: number }> = (props) => {
    if (activeNum !== props.index) return null;
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
        {stationsInfo[props.index]?.departureTimes?.map((info, index) => {
          return (
            <SwiperSlide key={index}>
              <MainCountdown departureTime={info.departureTime} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  };

  const Tabs: React.FC<{ index: number }> = (props) => {
    return (
      <div
        style={{ flexBasis: '33%' }}
        onClick={() => {
          setActiveNum(props.index);
        }}
      >
        {activeNum === props.index ? (
          <SelectedStation
            selectedStation={stationsInfo[props.index]?.stationName}
            selectedStationLine={stationsInfo[props.index]?.lineName}
          />
        ) : (
          <OtherStation
            otherStation={stationsInfo[props.index]?.stationName}
            otherStationLine={stationsInfo[props.index]?.lineName}
          />
        )}
      </div>
    );
  };

  return (
    <HomeWrapper>
      <StationsWrapper>
        <Tabs index={0} />
        <Tabs index={1} />
        <Tabs index={2} />
      </StationsWrapper>
      <TabPanel index={0} />
      <TabPanel index={1} />
      <TabPanel index={2} />
    </HomeWrapper>
  );
};

const StationsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 3px;
  padding: 20px 10px;
  background-color: #f0f5fb;
  filter: drop-shadow(0px 1px 3px rgba(0, 24, 88, 0.15));
`;

const HomeWrapper = styled.div`
  position: fixed;
  z-index: 100;
  height: 10vh;
  width: 100%;
`;
