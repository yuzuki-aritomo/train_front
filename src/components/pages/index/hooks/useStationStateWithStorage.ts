import { useState } from 'react';
import type { SelectedStationInfoType } from '@/context/types';

export const useStationStateWithStorage = (
  init: SelectedStationInfoType,
  key: string
): [SelectedStationInfoType, (s: SelectedStationInfoType) => void] => {
  const json: string = localStorage.getItem(key) || '';
  const stationInfo = JSON.parse(json) as SelectedStationInfoType;
  const [station, setStation] = useState<SelectedStationInfoType>(stationInfo || init);

  return [station, setStation];
};
