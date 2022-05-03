import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { StationCard } from '@/components/common/settings/change-stations/StationCard';
import { StationDirectionModal } from '@/components/common/settings/change-stations/StationDirectionModal';
import { SettingHeader } from '@/components/common/settings/SettingHeader';
import { GRAY } from '@/context/style/colorTheme';

export type StationType = {
  stationLineName: string;
  stationName: string;
  stationDirection: string[];
};

type ResponseStationType = {
  id: number;
  line_cd: number;
  line_name: string;
  station_cd: number;
  station_name: string;
  station_name_k: string;
  direction_1?: string;
  direction_2?: string;
};

export const ChangeStations = () => {
  const [stationsList, setStationsList] = useState<StationType[]>();

  const [open, setOpen] = useState(false);
  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  const [stationName, setStationName] = useState<string>();
  const [selectedStationDir, setSelectedStationDir] = useState<string[]>([]);

  useEffect(() => {
    console.log(stationName);
    if (stationName !== undefined) {
      axios
        .get('https://train-api-rails.herokuapp.com/search?name=' + stationName)
        .then((res) => {
          console.log('成功');
          const responseData: ResponseStationType[] = res.data.data;
          const resStationsList = responseData.map((data) => {
            const stationData: StationType = {
              stationName: data.station_name,
              stationLineName: data.line_name,
              stationDirection: [],
              // stationDirection: [data.direction_1, data.direction_2],
            };
            return stationData;
          });
          setStationsList(resStationsList);
          console.log(resStationsList);
        })
        .catch(() => {
          console.log('error');
        });
    }
  }, [stationName]);

  return (
    <>
      <SettingHeader pageName="駅を変更" />
      <SearchField>
        <SearchIcon sx={{ fontSize: '30px', padding: '2px', marginLeft: '2vw' }} />
        <SearchInput
          placeholder="駅名を入力してください"
          type="search"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setStationName(e.target.value);
          }}
        />
      </SearchField>
      <StationCardList>
        {stationsList?.map((data, index) => {
          return (
            <StationCard
              key={index}
              Station={data}
              onClickStation={() => {
                handleModalOpen();
                setSelectedStationDir(data.stationDirection);
              }}
            />
          );
        })}
      </StationCardList>
      <StationDirectionModal
        handleModalClose={handleModalClose}
        isModalOpen={open}
        selectedStationDir={selectedStationDir}
      />
    </>
  );
};

const SearchField = styled.div`
  width: 94vw;
  border-radius: 16px;
  background-color: ${GRAY};
  padding: 1px 0;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 80%;
  height: 100%;
  background-color: ${GRAY};
  border: 0;
  padding: 10px;
  :focus {
    outline: 0ch;
  }
`;

const StationCardList = styled.div`
  text-align: center;
  border-top: 1px solid ${GRAY};
`;
