import type { SelectedStationInfoType } from '@/types/SelectedStationInfoType';

export const getStationInfo = (): SelectedStationInfoType | null => {
  const key = 'station';

  if (typeof window !== 'undefined') {
    const json: string = localStorage.getItem(key) || '';
    const stationInfo = JSON.parse(json || 'null') as SelectedStationInfoType;
    return stationInfo;
  } else {
    return null;
  }
};
