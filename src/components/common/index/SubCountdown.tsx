import styled from 'styled-components';
import { BLACK, BLUE, GRAY, WHITE } from '@/context/style/colorTheme';

type SubCountdownProps = {
  countdown: string;
  departureTime?: string;
  hasDeparted: boolean;
};

export const SubCountdown: React.FC<SubCountdownProps> = (props) => {
  return (
    <Wrapper hasDeparted={props.hasDeparted}>
      <Countdown hasDeparted={props.hasDeparted}>{props.countdown}</Countdown>
      {props.hasDeparted ? (
        <Description>秒前に出発</Description>
      ) : (
        <DepartureTime>
          {props.departureTime} <span>発</span>
        </DepartureTime>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ hasDeparted: boolean }>`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 18vw;
  height: 18vw;
  max-width: 120px;
  max-height: 120px;
  background-color: ${WHITE};
  border: ${(props) =>
    props.hasDeparted ? `5px solid ${GRAY}` : `5px solid ${BLUE}`};
  border-radius: 24px;
  padding: 5px 10px;
  margin: 20px auto;
  box-shadow: 0px 4px 12px 2px rgba(23, 25, 30, 0.25);
`;

const Description = styled.p`
  color: ${GRAY};
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  margin: 0;
`;

const Countdown = styled.h1<{ hasDeparted: boolean }>`
  color: ${(props) => (props.hasDeparted ? GRAY : BLACK)};
  font-size: 24px;
  line-height: 100%;
  margin: 0;
`;

const DepartureTime = styled.div`
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  span {
    font-size: 12px;
  }
`;
