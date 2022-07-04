import { apiClient } from '@/api/apiClient';
import type { StationType } from '@/types/StationType';

type ResponseType = {
  data: {
    id: number;
    line_cd: number;
    line_name: string;
    station_cd: number;
    station_name: string;
    station_name_k: string;
    direction_1?: string;
    direction_2?: string;
  }[];
  error?: string;
};

export const getStation = async (searchStationName: string) => {
  try {
    const response = await apiClient.get<ResponseType>(`/search?name=${searchStationName}`);
    if (response.data.error) {
      console.error(response.data.error);
      return [];
    }

    const stationList = response.data.data.map((data): StationType => {
      return {
        id: data.id,
        line_cd: data.line_cd,
        station_cd: data.station_cd,
        stationName: data.station_name,
        stationLineName: data.line_name,
        stationDirection: [data.direction_1, data.direction_2].filter((v) => v),
      };
    });

    return stationList;
  } catch (e) {
    console.error(e);
    return [];
  }
};
