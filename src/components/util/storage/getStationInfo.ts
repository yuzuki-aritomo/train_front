import type { SelectedStationType } from '@/types/SelectedStationType';

export const getStationInfo = (): SelectedStationType | null => {
  const key = 'station';

  if (typeof window !== 'undefined') {
    const json: string = localStorage.getItem(key) || '';
    const stationInfo = JSON.parse(json || 'null') as SelectedStationType;
    return stationInfo;
  } else {
    return null;
  }
};
