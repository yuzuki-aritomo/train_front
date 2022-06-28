import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { IconMenu } from '@/components/common/IconMenu';

import 'swiper/css';
import 'swiper/css/pagination';

import { CountdownList } from '@/components/common/index/CountdownList';
import { OtherStation } from '@/components/common/index/OtherStation';
import { SelectedStation } from '@/components/common/index/SelectedStation';
import { getDepartureTimes } from '@/components/util/index/getDepartureTimes';
import { getStationInfo } from '@/components/util/index/getStationInfo';
import type { DepartureTimesType } from '@/types/DepartureTimesType';
import type { SelectedStationInfoType } from '@/types/SelectedStationInfoType';

export const Home: FC = () => {
  const initStationData: SelectedStationInfoType = {
    id: 3071,
    line_cd: 11605,
    line_name: 'JR湖西線',
    selected_direction: '敦賀方面',
    station_cd: 1160501,
    station_name: '京都',
  };

  const [station, setStation] = useState<SelectedStationInfoType>(initStationData);
  const [departureTimes, setDepartureTimes] = useState<DepartureTimesType>();

  useEffect(() => {
    const setStationData = async () => {
      const stationData: SelectedStationInfoType | null = getStationInfo();
      if (stationData) return setStation(stationData);
      setStation(initStationData);
    };

    const setDepartureTimesData = async () => {
      const departureTimesData = await getDepartureTimes(station);
      setDepartureTimes(departureTimesData);
    };

    (async (): Promise<void> => {
      try {
        await setStationData();
        await setDepartureTimesData();
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <HomeWrapper>
      <StationsWrapper>
        <OtherStation />
        <SelectedStation lineName={station.line_name} stationName={station.station_name} />
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
