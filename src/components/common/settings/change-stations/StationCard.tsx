import styled from "styled-components";
import { BLACK, GRAY } from "@/context/style/colorTheme";

type StationCardProps = {
  StationName: string,
  StationLineName: string
}

export const StationCard: React.FC<StationCardProps> = (props) => {
  return(
    <StationCardWrapper>
      <div>
        <StationName>{props.StationName}</StationName>
        <StationLineName>{props.StationLineName}</StationLineName>
      </div>
      <StationRegisterContainer>
        登録
      </StationRegisterContainer>
    </StationCardWrapper>
  )
}

const StationCardWrapper = styled.div`
  width: 96vw;
  height: 8vh;
  border-bottom: 1px solid ${GRAY};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StationName = styled.p`
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  color: ${BLACK};
  margin: 0;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StationLineName = styled.p`
  width: 100%;
  color: purple;
  font-size: 14px;
  margin: 0;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StationRegisterContainer = styled.p`
  width: 18vw;
  color: white;
  font-size: 14px;
  background-color: purple;
  border-radius: 32px;
  padding: 10px 0;
`;
