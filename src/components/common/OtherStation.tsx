import styled from 'styled-components';
import { BLACK } from '@/context/style/colorTheme';

type Props = {
  otherStation: string;
  otherStationLine: string;
}

export const OtherStation: React.FC<Props> = (props) => {
  return (
    <StationWrapper>
      <StationName>{props.otherStation}</StationName>
      <StationLineName>{props.otherStationLine}</StationLineName>
    </StationWrapper>
  )
};

const StationWrapper = styled.div`
  width: 22%;
  text-align: center;
`;

const StationName = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: ${BLACK};
  margin: 0 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StationLineName = styled.p`
  font-size: 8px;
  color: ${BLACK};
  margin: 0 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;