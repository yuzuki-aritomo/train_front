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
  width: 100%;
  text-align: center;
  margin: 0 auto;
  padding: 0 10px;
`;

const StationName = styled.p`
  font-size: 15px;
  width: 100%;
  text-align: center;
  font-weight: bold;
  color: ${BLACK};
  margin-bottom: 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StationLineName = styled.p`
  font-size: 12px;
  width: 100%;
  text-align: center;
  color: ${BLACK};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
