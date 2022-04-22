import styled from 'styled-components';
import { BLUE } from '@/context/style/colorTheme';

export const SelectedStation = () => {
  return (
    <SelectedStationAround>
      <SelectedStationName>京都駅</SelectedStationName>
      <SelectedStationRouteName>JR京都線</SelectedStationRouteName>
    </SelectedStationAround>
  );
};

const SelectedStationAround = styled.div`
  width: 39%;
  height: 94px;
  border: 7px solid;
  border-color: ${BLUE};
  border-radius: 24px;
  margin: 0 auto;
`;
const SelectedStationName = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  padding: 0 8px;
  margin: 20px 0 auto auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const SelectedStationRouteName = styled.p`
  color: ${BLUE};
  font-size: 14px;
  text-align: center;
  padding: 0 8px;
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
