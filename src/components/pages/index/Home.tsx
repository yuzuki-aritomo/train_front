import React from 'react';
import styled from 'styled-components';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IconMenu } from '@/components/common/IconMenu';
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

type TabType = {
  stationInfo: StationsInfoType;
};

export const Home = () => {
  // demo deta
  const createDate = (days: number, hours: number, minutes: number): Date => {
    const newDate: Date = new Date(2022, 5 - 1, days, hours, minutes);
    return newDate;
  };

  const stationsInfo: StationsInfoType[] = [
    {
      departureTimes: [
        { departureTime: createDate(21, 9, 1), hasDeparted: true },
        { departureTime: createDate(21, 10, 1), hasDeparted: false },
        { departureTime: createDate(21, 11, 1), hasDeparted: false },
        { departureTime: createDate(21, 12, 1), hasDeparted: false },
        { departureTime: createDate(21, 13, 1), hasDeparted: false },
        { departureTime: createDate(21, 14, 1), hasDeparted: false },
        { departureTime: createDate(21, 15, 1), hasDeparted: false },
        { departureTime: createDate(21, 16, 1), hasDeparted: false },
        { departureTime: createDate(21, 17, 1), hasDeparted: false },
        { departureTime: createDate(21, 18, 1), hasDeparted: false },
      ],
      stationName: '梅田駅',
      lineName: '御堂筋線',
    },
    {
      departureTimes: [
        { departureTime: createDate(21, 19, 1), hasDeparted: true },
        { departureTime: createDate(21, 20, 1), hasDeparted: false },
        { departureTime: createDate(21, 21, 1), hasDeparted: false },
        { departureTime: createDate(22, 22, 1), hasDeparted: false },
        { departureTime: createDate(22, 23, 1), hasDeparted: false },
        { departureTime: createDate(22, 24, 1), hasDeparted: false },
        { departureTime: createDate(22, 1, 1), hasDeparted: false },
        { departureTime: createDate(22, 2, 1), hasDeparted: false },
        { departureTime: createDate(22, 3, 1), hasDeparted: false },
        { departureTime: createDate(22, 4, 1), hasDeparted: false },
      ],
      stationName: '京都駅',
      lineName: 'JR京都線',
    },
    {
      departureTimes: [
        { departureTime: createDate(23, 5, 1), hasDeparted: true },
        { departureTime: createDate(23, 6, 1), hasDeparted: false },
        { departureTime: createDate(23, 7, 1), hasDeparted: false },
        { departureTime: createDate(23, 8, 1), hasDeparted: false },
        { departureTime: createDate(23, 9, 1), hasDeparted: false },
        { departureTime: createDate(23, 10, 1), hasDeparted: false },
        { departureTime: createDate(23, 11, 1), hasDeparted: false },
        { departureTime: createDate(23, 12, 1), hasDeparted: false },
        { departureTime: createDate(23, 13, 1), hasDeparted: false },
        { departureTime: createDate(23, 14, 1), hasDeparted: false },
      ],
      stationName: '東梅田駅',
      lineName: '谷町線',
    },
  ];

  const TabPanel: React.FC<TabType> = (props) => {
    const { stationInfo } = props;

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
        {stationInfo.departureTimes.map((info, index) => {
          return (
            <SwiperSlide key={index}>
              <MainCountdown departureTime={info.departureTime} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  };

  return (
    <>
      <StationsWrapper>
        <OtherStation />
        {stationsInfo[0] && (
          <SelectedStation
            lineName={stationsInfo[0].lineName}
            stationName={stationsInfo[0].stationName}
          />
        )}
        <OtherStation />
      </StationsWrapper>
      {stationsInfo[0] && <TabPanel stationInfo={stationsInfo[0]} />}
      <IconMenu isHomePage={true} />
    </>
  );
};

const StationsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 100;
  column-gap: 10px;
  width: 100%;
  height: 20vh;
  margin-bottom: 3px;
  padding: 20px 10px;
  background-color: #f0f5fb;
  filter: drop-shadow(0px 1px 3px rgba(0, 24, 88, 0.15));
`;
