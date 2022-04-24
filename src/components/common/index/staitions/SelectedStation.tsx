import styled from 'styled-components';
import { BLACK, BLUE } from '@/context/style/colorTheme';

type Props = {
  selectedStation: string;
  selectedStationLine: string;
};

export const SelectedStation: React.FC<Props> = (props) => {
  return (
    <StationWrapper>
      <StationName>{props.selectedStation}</StationName>
      <StationLineName>{props.selectedStationLine}</StationLineName>
    </StationWrapper>
  );
};

const StationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  max-width: 40%;
  min-width: 100px;
  margin: -10px 0;
  padding: 10px;
  border: 7px solid ${BLUE};
  border-radius: 24px;
  background-color: #fff;
`;

const StationName = styled.p`
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  color: ${BLACK};
  margin: 0;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StationLineName = styled.p`
  width: 100%;
  color: ${BLUE};
  font-size: 14px;
  margin: 0;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
