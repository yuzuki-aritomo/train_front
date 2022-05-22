import type { SelectedStationInfoType } from '@/context/types';

export const getStationInfo = (key: string): SelectedStationInfoType | void => {
  if (typeof window !== 'undefined') {
    const json: string = localStorage.getItem(key) || '';
    const stationInfo = JSON.parse(json || 'null') as SelectedStationInfoType;
    return stationInfo;
  }
  return;
};
