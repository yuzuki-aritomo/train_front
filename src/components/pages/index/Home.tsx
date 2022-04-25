import React, { useState } from 'react';
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
  activeNum: number;
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
        { departureTime: createDate(25, 19, 1), hasDeparted: true },
        { departureTime: createDate(25, 20, 1), hasDeparted: false },
        { departureTime: createDate(25, 21, 1), hasDeparted: false },
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

  const TabPanel: React.FC<TabType> = (props) => {
    if (activeNum !== props.activeNum) return null;
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
        {props.stationInfo.departureTimes.map((info, index) => {
          return (
            <SwiperSlide key={index}>
              <MainCountdown departureTime={info.departureTime} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  };

  const Tabs: React.FC<TabType> = (props) => {
    return (
      <div
        style={{ flexBasis: '33%' }}
        onClick={() => {
          setActiveNum(props.activeNum);
        }}
      >
        {activeNum === props.activeNum ? (
          <SelectedStation
            lineName={props.stationInfo.lineName}
            stationName={props.stationInfo.stationName}
          />
        ) : (
          <OtherStation
            lineName={props.stationInfo.lineName}
            stationName={props.stationInfo.stationName}
          />
        )}
      </div>
    );
  };

  return (
    <>
      <HomeWrapper>
        <StationsWrapper>
          {stationsInfo[0] && <Tabs activeNum={0} stationInfo={stationsInfo[0]} />}
          {stationsInfo[1] && <Tabs activeNum={1} stationInfo={stationsInfo[1]} />}
          {stationsInfo[2] && <Tabs activeNum={2} stationInfo={stationsInfo[2]} />}
        </StationsWrapper>
        {stationsInfo[0] && <TabPanel activeNum={0} stationInfo={stationsInfo[0]} />}
        {stationsInfo[1] && <TabPanel activeNum={1} stationInfo={stationsInfo[1]} />}
        {stationsInfo[2] && <TabPanel activeNum={2} stationInfo={stationsInfo[2]} />}
      </HomeWrapper>
      <IconMenu isHomePage={true} />
    </>
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
