import styled from 'styled-components';
import { BLACK } from '@/context/style/colorTheme';

type Props = {
  otherStation: string;
  otherStationLine: string;
};

export const OtherStation: React.FC<Props> = (props) => {
  return (
    <StationWrapper>
      <StationName>{props.otherStation}</StationName>
      <StationLineName>{props.otherStationLine}</StationLineName>
    </StationWrapper>
  );
};

const StationWrapper = styled.div`
  width: 30%;
  text-align: center;
`;

const StationName = styled.p`
  font-size: 12px;
  width: 100%;
  text-align: center;
  font-weight: bold;
  color: ${BLACK};
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StationLineName = styled.p`
  font-size: 8px;
  width: 100%;
  text-align: center;
  color: ${BLACK};
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
