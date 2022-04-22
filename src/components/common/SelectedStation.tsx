import styled from 'styled-components';
import { BLUE } from '@/context/style/colorTheme';

type Props = {
  selectedStation: string;
  selectedStationLine: string;
}

export const SelectedStation: React.FC<Props> = (props) => {
  return (
    <StationWrapper>
      <StationName>{props.selectedStation}</StationName>
      <StationLineName>{props.selectedStationLine}</StationLineName>
    </StationWrapper>
  );
};

const StationWrapper = styled.div`
  width: 40%;
  height: 94px;
  border: 7px solid;
  border-color: ${BLUE};
  border-radius: 24px;
  margin: -20px 0;
  background-color: #fff;
`;
const StationName = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: black;
  text-align: center;
  padding: 0 8px;
  margin: 20px 0 auto auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const StationLineName = styled.p`
  color: ${BLUE};
  font-size: 14px;
  text-align: center;
  padding: 0 8px;
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;