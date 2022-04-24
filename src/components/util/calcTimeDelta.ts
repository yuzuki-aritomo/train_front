import type { Dispatch, SetStateAction } from 'react';

type CalcTimeDeltaProps = {
  departureTime: Date;
  setCountdown: Dispatch<
    SetStateAction<
      | {
          minutes: string;
          seconds: string;
        }
      | undefined
    >
  >;
};

export const calcTimeDelta = (props: CalcTimeDeltaProps) => {
  const currentTime: number = Date.now();
  const diff: number =
    Math.abs(props.departureTime.getTime() - currentTime) / 1000;

  const hours: number = Math.floor(((diff / 3600) % 24) * 60);
  let updatedMinutes: string = (
    Math.floor((diff / 60) % 60) + hours
  ).toString();
  if (updatedMinutes.length === 1)
    updatedMinutes = updatedMinutes.padStart(2, '0');

  let updatedSeconds: string = Math.floor(diff % 60).toString();
  if (updatedSeconds.length === 1)
    updatedSeconds = updatedSeconds.padStart(2, '0');

  props.setCountdown({
    minutes: updatedMinutes,
    seconds: updatedSeconds,
  });
};
