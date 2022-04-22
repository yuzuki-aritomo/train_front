import { BLUE, WHITE } from '@/context/style/colorTheme';
import styled from 'styled-components';

export const SelectedTime: React.FC = () => {
  return (
    <div>
      <SelectedTimeWrapper>
        <Description>出発時刻まで残り...</Description>
        <Countdown>10:30</Countdown>
        <div>09:39発</div>
      </SelectedTimeWrapper>
    </div>
  );
};

const SelectedTimeWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 60vw;
  height: 60vw;
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

const Countdown = styled.h1`
  font-family: 'Arial';
  font-weight: 700;
  font-size: 80px;
  margin: 0 0 15px;
`;
