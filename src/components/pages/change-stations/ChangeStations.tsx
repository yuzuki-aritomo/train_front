import SearchIcon from '@mui/icons-material/Search';
import { TextField } from "@mui/material";
import styled from "styled-components";
import {StationCard} from "@/components/common/settings/change-stations/StationCard";
import { GRAY } from "@/context/style/colorTheme";

export const ChangeStations = () => {
  return(
    <>
      {/* 検索バーの作成 */}
      <SearchField>
        <SearchIcon sx={{ fontSize: '30px', padding: '2px', marginLeft: '2vw' }} />
        <TextField fullWidth id="standard-basic" label="駅名を入力してください" sx={{ margin: '1px 3vw 1px 0' }} variant="standard" />
      </SearchField>
      <StationCardList>
        <StationCard />
        <StationCard />
        <StationCard />
        <StationCard />
        <StationCard />
      </StationCardList>
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

const StationCardList = styled.div`
  text-align: center;
  border-top: 1px solid ${GRAY}
`;
