import styled from 'styled-components';
import { BLACK, BLUE } from '@/context/style/colorTheme';

type SelectedStationProps = {
  stationName?: string;
  lineName?: string;
};

export const SelectedStation: React.FC<SelectedStationProps> = (props) => {
  return (
    <StationWrapper>
      <StationName>{props.stationName}</StationName>
      <StationLineName>{props.lineName}</StationLineName>
    </StationWrapper>
  );
};

const StationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  min-width: 100px;
  margin: -10px 0;
  padding: 20px 10px;
  border: 7px solid ${BLUE};
  border-radius: 24px;
  background-color: #fff;
`;

const StationName = styled.p`
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  color: ${BLACK};
  margin-bottom: 5px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StationLineName = styled.p`
  width: 100%;
  color: ${BLUE};
  font-size: 14px;
  text-align: center;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
