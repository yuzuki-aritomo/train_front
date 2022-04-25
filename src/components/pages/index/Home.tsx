import React, { useState } from 'react';
import styled from 'styled-components';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MainCountdown } from '@/components/common/index/MainCountdown';
import 'swiper/css';
import 'swiper/css/pagination';
import { OtherStation } from '@/components/common/index/OtherStation';
import { SelectedStation } from '@/components/common/index/SelectedStation';

type StationsInfoListType = {
  departureTimes: {
    departureTime: Date;
    hasDeparted: boolean;
  }[][];
  names: {
    station: string;
    line: string;
  }[];
};

export const Home = () => {
  // demo deta
  const createDate = (days: number, hours: number, minutes: number): Date => {
    const newDate: Date = new Date(2022, 4 - 1, days, hours, minutes);
    return newDate;
  };

  // demo deta
  const stationsInfoList: StationsInfoListType = {
    departureTimes: [
      [
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
      [
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
      [
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
    ],
    names: [
      {
        station: '梅田駅',
        line: '御堂筋線',
      },
      {
        station: '京都駅',
        line: 'JR京都線',
      },
      {
        station: '東梅田駅',
        line: '谷町線',
      },
    ],
  };

  // flagは駅コードになる
  const [displayFlag, setDisplayFlag] = useState<number>(0);
  const [activeNum, setActiveNum] = useState<number>(1);

  const TabPanel: React.FC<{ index: number }> = (props) => {
    if (displayFlag === props.index) {
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
          {stationsInfoList?.departureTimes[props.index]?.map((info, index) => {
            return (
              <SwiperSlide key={index}>
                <MainCountdown departureTime={info.departureTime} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      );
    } else {
      return null;
    }
  };

  const Tabs: React.FC<{ index: number }> = (props) => {
    return (
      <div
        style={{ flexBasis: '33%' }}
        onClick={() => {
          setDisplayFlag(props.index);
          setActiveNum(props.index);
        }}
      >
        {activeNum === props.index ? (
          <SelectedStation
            selectedStation={stationsInfoList.names[props.index]?.station}
            selectedStationLine={stationsInfoList.names[props.index]?.line}
          />
        ) : (
          <OtherStation
            otherStation={stationsInfoList.names[props.index]?.station}
            otherStationLine={stationsInfoList.names[props.index]?.line}
          />
        )}
      </div>
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
          <Tabs index={0} />
          <Tabs index={1} />
          <Tabs index={2} />
        </StationsWrapper>
        <TabPanel index={0} />
        <TabPanel index={1} />
        <TabPanel index={2} />
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
