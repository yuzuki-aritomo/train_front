import React, { useState } from 'react';
import styled from 'styled-components';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MainCountdown } from '@/components/common/index/MainCountdown';
import 'swiper/css';
import 'swiper/css/pagination';
import { OtherStation } from '@/components/common/index/OtherStation';
import { SelectedStation } from '@/components/common/index/SelectedStation';

type CountInfo = {
  departureTime: Date;
  hasDeparted: boolean;
};

export const Home = () => {
  // demo deta
  const selectedStation: { name: string; line: string } = {
    name: '梅田駅',
    line: '御堂筋線',
  };

  // demo deta
  const createDate = (days: number, hours: number, minutes: number): Date => {
    const newDate: Date = new Date(2022, 4 - 1, days, hours, minutes);
    console.log(days);
    return newDate;
  };

  // demo deta
  const countInfoList0: CountInfo[] = [
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
  ];

  // demo deta
  const countInfoList1: CountInfo[] = [
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
  ];

  // demo deta
  const countInfoList2: CountInfo[] = [
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
  ];

  // flagは駅コードになる
  const [displayFlag, setDisplayFlag] = useState<number>(0);
  const [active, setActive] = useState<number>(1);

  const TabPanel = (selectedStationTimes: CountInfo[]) => {
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
        {selectedStationTimes.map((info, index) => {
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
      <div
        style={{
          position: 'fixed',
          zIndex: 100,
          height: '10vh',
          width: '100%',
        }}
      >
        <StationsWrapper>
          <div
            style={{ flexBasis: '33%' }}
            onClick={() => {
              setDisplayFlag(0);
              setActive(0);
              console.log(displayFlag);
            }}
          >
            {active === 0 ? (
              <SelectedStation
                selectedStation={selectedStation.name}
                selectedStationLine={selectedStation.line}
              />
            ) : (
              <OtherStation
                otherStation={selectedStation.name}
                otherStationLine={selectedStation.line}
              />
            )}
          </div>
          <div
            style={{ flexBasis: '33%' }}
            onClick={() => {
              setDisplayFlag(1);
              setActive(1);
              console.log(displayFlag);
            }}
          >
            {active === 1 ? (
              <SelectedStation
                selectedStation={selectedStation.name}
                selectedStationLine={selectedStation.line}
              />
            ) : (
              <OtherStation
                otherStation={selectedStation.name}
                otherStationLine={selectedStation.line}
              />
            )}
          </div>
          <div
            style={{ flexBasis: '33%' }}
            onClick={() => {
              setDisplayFlag(2);
              setActive(2);
              console.log(displayFlag);
            }}
          >
            {active === 2 ? (
              <SelectedStation
                selectedStation={selectedStation.name}
                selectedStationLine={selectedStation.line}
              />
            ) : (
              <OtherStation
                otherStation={selectedStation.name}
                otherStationLine={selectedStation.line}
              />
            )}
          </div>
        </StationsWrapper>
        {displayFlag === 0 && TabPanel(countInfoList0)}
        {displayFlag === 1 && TabPanel(countInfoList1)}
        {displayFlag === 2 && TabPanel(countInfoList2)}
      </div>
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
