import styled from 'styled-components';
import { BLACK, BLUE, WHITE } from '@/context/style/colorTheme';
import type { StationType } from '@/types/StationType';

type StationCardProps = {
  Station: StationType;
  onClickStation: () => void;
};

export const StationCard: React.FC<StationCardProps> = (props) => {
  return (
    <>
      <StationCardWrapper>
        <StationInfo>
          <StationName>{props.Station.stationName}</StationName>
          <StationLineName>{props.Station.stationLineName}</StationLineName>
        </StationInfo>
        <StationRegisterButton onClick={props.onClickStation}>選択</StationRegisterButton>
      </StationCardWrapper>
    </>
  );
};

const buttonSize = '70px';

const StationCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 12px;
  border-bottom: 1px solid #eff3f4;
`;

const StationInfo = styled.div`
  width: calc(100% - ${buttonSize});
  padding-right: 10px;
`;

const StationName = styled.p`
  max-width: 100%;
  font-size: 16px;
  font-weight: bold;
  color: ${BLACK};
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 5px;
`;

const StationLineName = styled.p`
  width: 100%;
  color: ${BLUE};
  font-size: 14px;
  margin: 0;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StationRegisterButton = styled.button`
  width: ${buttonSize};
  color: ${WHITE};
  font-size: 14px;
  background-color: ${BLUE};
  border-radius: 9999px;
  padding: 10px 0;
`;
