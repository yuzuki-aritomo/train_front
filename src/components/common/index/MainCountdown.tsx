import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { formattedDate } from '@/components/util/formattedDate';
import { BLUE } from '@/context/style/colorTheme';

type MainCountdownProps = {
  departureTime: Date;
};

export const MainCountdown: React.FC<MainCountdownProps> = (props) => {
  const [countdown, setCountdown] = useState<{
    minutes: number;
    seconds: number;
  }>();

  useEffect(() => {
    try {
      const timer: NodeJS.Timeout = setInterval(() => {
        const currentTime: number = Date.now();
        const diff: number =
          Math.abs(props.departureTime.getTime() - currentTime) / 1000;

        const hours = Math.floor(((diff / 3600) % 24) * 60);
        const updatedMinutes = Math.floor((diff / 60) % 60) + hours;

        const updatedSeconds = Math.floor(diff % 60);

        setCountdown({
          minutes: updatedMinutes,
          seconds: updatedSeconds,
        });
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <CountdownWrapper>
      <Description>出発時刻まで残り...</Description>
      <Countdown>
        {countdown?.minutes}:{countdown?.seconds}
      </Countdown>
      <DepartureTime>
        {formattedDate(props.departureTime, 'monthsDays')} <span>発</span>
      </DepartureTime>
    </CountdownWrapper>
  );
};

const CountdownWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 60vw;
  max-width: 400px;
  max-height: 400px;
  background-color: '#eee';
  border: 10px solid ${BLUE};
  border-radius: 40px;
  padding: 0px 20px;
  margin: 0 auto;
  box-shadow: 0px 4px 12px 2px rgba(108, 155, 210, 0.5);
`;

const Description = styled.p`
  color: ${BLUE};
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 15px;
`;

const Countdown = styled.h1`
  font-size: 70px;
  font-weight: 700;
  line-height: 100%;
  margin: 0 0 10px;
`;

const DepartureTime = styled.div`
  background-color: #f0f5fb;
  padding: 10px 10px;
  font-weight: 700;
  font-size: 22px;
  width: 75%;
  max-width: 205px;
  text-align: center;
  border-radius: 9999px;
  span {
    font-size: 16px;
  }
`;
