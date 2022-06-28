import { apiClient } from '@/components/api/apiClient';
import { setDate } from '@/components/util/index/setDate';
import type { DepartureTimesType } from '@/types/DepartureTimesType';
import type { SelectedStationInfoType } from '@/types/SelectedStationInfoType';

export const getDepartureTimes = async (stationInfo: SelectedStationInfoType) => {
  const params: { params: { station: number; date: 1 | 2 | 3; direction: string } } = {
    params: {
      station: stationInfo.station_cd,
      date: setDate(),
      direction: stationInfo.selected_direction,
    },
  };

  const responseData = (await apiClient.get<DepartureTimesType>('/times', params)).data;

  return responseData;
};
