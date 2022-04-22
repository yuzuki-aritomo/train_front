import { BLACK, BLUE, WHITE } from '@/context/style/colorTheme';
import styled from 'styled-components';

export const Countdown: React.FC = () => {
  return (
    <CountdownWrapper>
      <Description>出発時刻まで残り...</Description>
      <RemainingTime>10:30</RemainingTime>
      <DepartureTime>
        09:39 <span>発</span>
      </DepartureTime>
    </CountdownWrapper>
  );
};

const CountdownWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 60vw;
  height: 60vw;
  max-width: 400px;
  max-height: 400px;
  background-color: ${WHITE};
  border: 10px solid ${BLUE};
  border-radius: 80px;
  padding: 20px;
  margin: 0 auto;
  box-shadow: 0px 4px 12px 2px rgba(108, 155, 210, 0.5);
`;

const Description = styled.p`
  color: ${BLUE};
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 15px;
`;

const RemainingTime = styled.h1`
  font-family: 'Arial';
  font-weight: 700;
  font-size: 80px;
  line-height: 100%;
  margin: 0 0 10px;
`;

const DepartureTime = styled.div`
  background-color: #f0f5fb;
  padding: 10px 10px;
  font-weight: 700;
  font-size: 22px;
  color: ${BLACK};
  width: 80%;
  max-width: 205px;
  text-align: center;
  border-radius: 9999px;
  span {
    font-size: 16px;
  }
`;
