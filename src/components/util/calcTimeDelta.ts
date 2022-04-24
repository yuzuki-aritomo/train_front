import type { Dispatch, SetStateAction } from 'react';
import type { CountDownType } from '@/components/common/index/MainCountdown';

type CalcTimeDeltaProps = {
  departureTime: Date;
  setCountdown: Dispatch<SetStateAction<CountDownType | undefined>>;
};

export const calcTimeDelta = (props: CalcTimeDeltaProps) => {
  const currentTime: number = Date.now();
  const diff: number =
    Math.abs(props.departureTime.getTime() - currentTime) / 1000;

  const hours: number = Math.floor(((diff / 3600) % 24) * 60);
  const updatedMinutes: string = (Math.floor((diff / 60) % 60) + hours)
    .toString()
    .padStart(2, '0');

  const updatedSeconds: string = Math.floor(diff % 60)
    .toString()
    .padStart(2, '0');

  props.setCountdown({
    minutes: updatedMinutes,
    seconds: updatedSeconds,
  });
};
