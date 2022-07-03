import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { apiClient } from '@/api/apiClient';
import { StationCard } from '@/components/common/settings/change-stations/StationCard';
import { StationDirectionModal } from '@/components/common/settings/change-stations/StationDirectionModal';
import { SettingHeader } from '@/components/common/settings/SettingHeader';
import type { StationType } from '@/types/StationType';

export type ResponseStationType = {
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
};

export const ChangeStations = () => {
  const [searchStationName, setSearchStationName] = useState<string>();
  const [stationsList, setStationsList] = useState<StationType[]>([]);
  const [stationToStore, setStationToStore] = useState<StationType>();

  const [open, setOpen] = useState(false);
  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  useEffect(() => {
    if (!searchStationName) return setStationsList([]);

    const timeoutId = setTimeout(async () => {
      try {
        const responseData = (
          await apiClient.get<ResponseStationType>(`/search?name=${searchStationName}`)
        ).data;
        console.log('responseData:', responseData);
        const newStationList = responseData.data.map((data): StationType => {
          return {
            id: data.id,
            line_cd: data.line_cd,
            station_cd: data.station_cd,
            stationName: data.station_name,
            stationLineName: data.line_name,
            stationDirection: [data.direction_1, data.direction_2].filter((v) => v),
          };
        });
        setStationsList(newStationList);
      } catch (error) {
        console.log(error);
      }
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchStationName]);

  return (
    <>
      <SettingHeader pageName="駅を変更" />
      <SearchField>
        <SearchIcon />
        <SearchInput
          placeholder="駅名を入力してください"
          type="search"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchStationName(e.target.value);
          }}
        />
      </SearchField>
      <div>
        <StationCardList>
          {stationsList.map((data, index) => {
            if (data.stationDirection.length === 0) {
              return;
            }
            return (
              <StationCard
                key={index}
                Station={data}
                onClickStation={() => {
                  handleModalOpen();
                  setStationToStore(data);
                }}
              />
            );
          })}
        </StationCardList>
      </div>
      {stationToStore && (
        <StationDirectionModal
          handleModalClose={handleModalClose}
          isModalOpen={open}
          stationToStore={stationToStore}
        />
      )}
    </>
  );
};

const SearchField = styled.div`
  width: 95vw;
  border-radius: 9999px;
  background-color: #eff3f4;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const SearchInput = styled.input`
  width: 80%;
  height: 100%;
  border: 0;
  padding: 12px 5px;
  font-size: 16px;
  :focus {
    outline: 0ch;
  }
  ::placeholder {
    color: #526371;
  }
`;

const StationCardList = styled.div`
  height: 80vh;
  text-align: center;
  border-top: 1px solid #eff3f4;
  overflow: scroll;
  padding-bottom: 100px;
`;
