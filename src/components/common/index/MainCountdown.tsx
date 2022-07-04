import { Skeleton } from '@mui/material';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { calcTimeDelta } from '@/components/util/calcTimeDelta';
import { formattedDate } from '@/components/util/formattedDate';
import { BLUE, GRAY } from '@/context/style/colorTheme';

export type CountDownType = {
  minutes: string;
  seconds: string;
};

type MainCountdownProps = {
  departureTime: Date;
};

export const MainCountdown: React.FC<MainCountdownProps> = (props) => {
  const { departureTime } = props;
  const now = new Date();
  const isPast = departureTime < now;
  const [countdown, setCountdown] = useState<CountDownType>();

  useEffect(() => {
    const timer: NodeJS.Timeout = setInterval(() => {
      calcTimeDelta({
        departureTime: departureTime,
        setCountdown: setCountdown,
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [departureTime]);

  if (countdown == undefined) {
    return (
      <Skeleton
        height="70vw"
        max-height="400px"
        sx={{ borderRadius: '40px', boxShadow: '0px 4px 12px 2px rgba(108, 155, 210, 0.5)' }}
        variant="rectangular"
        width="300px"
      />
    );
  }
  return (
    <CountdownWrapper isPast={isPast}>
      <Description isPast={isPast}>出発時刻まで残り...</Description>
      <Countdown>
        {countdown?.minutes}:{countdown?.seconds}
      </Countdown>
      <DepartureTime isPast={isPast}>
        {formattedDate(departureTime, 'monthsDays')} <span>発</span>
      </DepartureTime>
    </CountdownWrapper>
  );
};

const CountdownWrapper = styled.div<{ isPast: boolean }>`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 70vw;
  max-height: 400px;
  background-color: '#eee';
  border: 10px solid ${(props) => (props.isPast ? GRAY : BLUE)};
  border-radius: 40px;
  padding: 0px 20px;
  margin: 0 auto;
  box-shadow: 0px 4px 12px 2px rgba(108, 155, 210, 0.5);
`;

const Description = styled.p<{ isPast: boolean }>`
  color: ${(props) => (props.isPast ? GRAY : BLUE)};
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 15px;
`;

const Countdown = styled.h1`
  font-size: 60px;
  font-weight: 700;
  line-height: 100%;
  margin: 0 0 10px;
`;

const DepartureTime = styled.div<{ isPast: boolean }>`
  background-color: ${(props) => (props.isPast ? 'rgba(185,186,188, 0.2)' : '#f0f5fb')};
  padding: 10px 10px;
  font-weight: 700;
  font-size: 22px;
  width: 75%;
  text-align: center;
  border-radius: 9999px;
  span {
    font-size: 16px;
  }
`;
