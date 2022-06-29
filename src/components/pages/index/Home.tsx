import React, { FC, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { getDepartureTimes } from '@/components/api/getDepartureTimes';
import { IconMenu } from '@/components/common/IconMenu';

import 'swiper/css';
import 'swiper/css/pagination';

import { CountdownList } from '@/components/common/index/CountdownList';
import { OtherStation } from '@/components/common/index/OtherStation';
import { SelectedStation } from '@/components/common/index/SelectedStation';
import { selectedStationState } from '@/context/globalStates/selectedStationState';
import type { DepartureTimesType } from '@/types/DepartureTimesType';

export const Home: FC = () => {
  const selectedStation = useRecoilValue(selectedStationState);
  const [departureTimes, setDepartureTimes] = useState<DepartureTimesType>();

  const setDepartureTimesData = async () => {
    if (!selectedStation) return;

    try {
      const departureTimesData = await getDepartureTimes(selectedStation);
      setDepartureTimes(departureTimesData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setDepartureTimesData();
  }, []);

  if (!selectedStation) return <div />;
  return (
    <HomeWrapper>
      <StationsWrapper>
        <OtherStation />
        <SelectedStation
          lineName={selectedStation.line_name}
          stationName={selectedStation.station_name}
        />
        <OtherStation />
      </StationsWrapper>
      <CountdownList departureTimes={departureTimes} />
      <IconMenu isHomePage={true} />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  z-index: 100;
  height: 100vh;
  width: 100%;
`;

const StationsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  column-gap: 10px;
  width: 100%;
  height: 20vh;
  margin-bottom: 3px;
  padding: 20px 10px;
  background-color: #f0f5fb;
  filter: drop-shadow(0px 1px 3px rgba(0, 24, 88, 0.15));
`;
