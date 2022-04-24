import SearchIcon from '@mui/icons-material/Search';
import { Modal } from "@mui/material";
import React from "react";
import styled from "styled-components";
import {StationCard} from "@/components/common/settings/change-stations/StationCard";
import { GRAY, WHITE } from "@/context/style/colorTheme";

export const ChangeStations = () => {
  const stationsData: {stationLinename: string, stationName: string, stationDirection: string[]}[] = [{
    stationLinename: "谷町線",
    stationName: "東梅田駅",
    stationDirection: ["八尾南方面", "大日方面"]
  }, {
    stationLinename: "御堂筋線",
    stationName: "梅田駅",
    stationDirection: ["なかもず方面", "千里中央方面"]
  },{
    stationLinename: "谷町線",
    stationName: "東梅田駅",
    stationDirection: ["八尾南方面", "大日方面"]
  },{
    stationLinename: "谷町線",
    stationName: "東梅田駅",
    stationDirection: ["八尾南方面", "大日方面"]
  }]

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return(
    <>
      <SearchField>
        <SearchIcon sx={{ fontSize: '30px', padding: '2px', marginLeft: '2vw' }} />
        <SearchInput placeholder="駅名を入力してください" type="search" />
      </SearchField>
      <StationCardList>
        {stationsData.map((data, index) => {
          return <StationCard key={index} StationLineName={data.stationLinename} StationName={data.stationName} onClickStation={handleOpen}/>
        })}
      </StationCardList>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <ModalBox>
          <div style={{ width: '200px', margin: '30px auto 0 auto', fontWeight: 700, fontSize: '16px'}}>
            方面を選択してください
          </div>
          <StationDirectionWrapper>
            <StationDirection>なかもず方面</StationDirection>
            <StationRegisterContainer>
              登録
            </StationRegisterContainer>
          </StationDirectionWrapper>
        </ModalBox>
      </Modal>
    </>
  )
}

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
  backgroundColor: ${GRAY};
  border: 0;
  padding: 10px;
  :focus {
    outline: 0ch;
  };
`;

const StationCardList = styled.div`
  text-align: center;
  border-top: 1px solid ${GRAY}
`;

const ModalBox = styled.div`
  width: 82%;
  height: 26%;
  top: 30%;
  left: 0;
  right: 0;
  margin: auto;
  background-color: ${WHITE};
  border-radius: 16px;
  position: absolute;
`;

const StationDirectionWrapper = styled.div`
  height: 8vh;
  margin: 0 20px;
  border-bottom: 1px solid ${GRAY};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StationDirection = styled.p`
  font-weight: 700;
  font-size: 16px;
`;

const StationRegisterContainer = styled.button`
  width: 18vw;
  color: white;
  font-size: 14px;
  text-align: center;
  background-color: purple;
  border-radius: 32px;
  padding: 10px 0;
`;