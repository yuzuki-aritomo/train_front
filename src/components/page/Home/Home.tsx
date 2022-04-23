import styled from 'styled-components';
import {OtherStation} from '@/components/common/OtherStation';
import {SelectedStation} from '@/components/common/SelectedStation';

export const Home = () => {
  return (
    <>
      <StationsWrapper>
        <OtherStation otherStation='阪急梅田駅' otherStationLine='阪急電車' />
        <SelectedStation selectedStation='京都駅' selectedStationLine='JR京都線' />
        <OtherStation otherStation='阪急梅田駅' otherStationLine='阪急電車' />
      </StationsWrapper>
    </>
  );
};

const StationsWrapper = styled.div`
  background-color:rgba(108, 155, 210, 0.15);
  border-radius: 32px;
  padding: 0 8%;
  margin: 20% 0 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
