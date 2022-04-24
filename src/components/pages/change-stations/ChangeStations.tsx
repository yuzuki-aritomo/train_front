import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { StationCard } from '@/components/common/settings/change-stations/StationCard';
import { StationDirectionModal } from '@/components/common/settings/change-stations/StationDirectionModal';
import { GRAY } from '@/context/style/colorTheme';

export type StationType = {
  stationLineName: string;
  stationName: string;
  stationDirection: string[];
};

export const ChangeStations = () => {
  const stationsList: StationType[] = [
    {
      stationLineName: '谷町線',
      stationName: '東梅田駅',
      stationDirection: ['八尾南方面', '大日方面'],
    },
    {
      stationLineName: '御堂筋線',
      stationName: '梅田駅',
      stationDirection: ['なかもず方面', '千里中央方面'],
    },
    {
      stationLineName: '谷町線',
      stationName: '東梅田駅',
      stationDirection: ['八尾南方面', '大日方面'],
    },
    {
      stationLineName: '谷町線',
      stationName: '東梅田駅',
      stationDirection: ['八尾南方面', '大日方面'],
    },
    {
      stationLineName: '千日前線',
      stationName: 'なんば駅',
      stationDirection: ['桜川方面', '京橋方面'],
    },
  ];

  const [open, setOpen] = useState(false);
  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  const [stationName, setStationName] = useState<string>();
  const [selectedStationDir, setSelectedStationDir] = useState<string[]>([]);

  useEffect(() => {
    console.log(stationName);
    // TODO：APIを実行する
  }, [stationName]);

  return (
    <>
      <SearchField>
        <SearchIcon
          sx={{ fontSize: '30px', padding: '2px', marginLeft: '2vw' }}
        />
        <SearchInput
          placeholder="駅名を入力してください"
          type="search"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setStationName(e.target.value);
          }}
        />
      </SearchField>
      <StationCardList>
        {stationsList.map((data, index) => {
          return (
            <StationCard
              key={index}
              Station={data}
              setSelectedStationDir={setSelectedStationDir}
              onClickStation={handleModalOpen}
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
  backgroundcolor: ${GRAY};
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
