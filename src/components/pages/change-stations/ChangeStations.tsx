import SearchIcon from '@mui/icons-material/Search';
import styled from "styled-components";
import {StationCard} from "@/components/common/settings/change-stations/StationCard";
import { GRAY } from "@/context/style/colorTheme";

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
  
  return(
    <>
      <SearchField>
        <SearchIcon sx={{ fontSize: '30px', padding: '2px', marginLeft: '2vw' }} />
        <SearchInput placeholder="駅名を入力してください" type="search" />
      </SearchField>
      <StationCardList>
        {stationsData.map((data, index) => {
          return <StationCard key={index} StationLineName={data.stationLinename} StationName={data.stationName} />
        })}
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
