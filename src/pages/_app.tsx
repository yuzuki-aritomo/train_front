import { CircularProgress } from '@mui/material';
import type { AppProps } from 'next/app';
import 'destyle.css';
import '@/context/style/globalStyle.css';
import 'swiper/css/bundle';
import { useEffect } from 'react';
import { RecoilRoot, useRecoilState } from 'recoil';
import styled from 'styled-components';

import { getStationInfo } from '@/components/util/storage/getStationInfo';
import { selectedStationState } from '@/context/globalStates/selectedStationState';
import type { SelectedStationType } from '@/types/SelectedStationType';

function AppInit({ Component, pageProps }: AppProps): JSX.Element {
  const initStationData: SelectedStationType = {
    id: 3071,
    line_cd: 11605,
    line_name: 'JR湖西線',
    selected_direction: '敦賀方面',
    station_cd: 1160501,
    station_name: '京都',
  };

  const [selectedStation, setSelectedStation] = useRecoilState(selectedStationState);

  useEffect(() => {
    const stationData: SelectedStationType | null = getStationInfo();
    if (stationData) return setSelectedStation(stationData);
    setSelectedStation(initStationData);
  }, []);

  if (selectedStation === null)
    return (
      <LoadingWrapper>
        <CircularProgress />
      </LoadingWrapper>
    );
  return <Component {...pageProps} />;
}

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Wrapper>
      <RecoilRoot>
        <AppInit Component={Component} pageProps={pageProps} router={router} />
      </RecoilRoot>
    </Wrapper>
  );
}

export default MyApp;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const LoadingWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
