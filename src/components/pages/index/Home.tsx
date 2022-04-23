import styled from 'styled-components';
import { MainCountdown } from '@/components/common/MainCountdown';
import { WRAPPER } from '@/context/style/common';
import { SelectedStation } from '@/components/common/SelectedStation';
import { SubCountdown } from '@/components/common/SubCountdown';
import { OtherStation } from '@/components/common/OtherStation';

export const Home = () => {
  return (
    <WRAPPER>
      {/* TODO: 駅名 */}
      <StationsWrapper>
        <OtherStation otherStation="阪急梅田駅" otherStationLine="阪急電車" />
        <SelectedStation
          selectedStation="京都駅"
          selectedStationLine="JR京都線"
        />
        <OtherStation otherStation="阪急梅田駅" otherStationLine="阪急電車" />
      </StationsWrapper>
      <div>
        <SubCountdown countdown="10:30" hasDeparted={true} />
        <MainCountdown departureTime="09:38" />
        <SubCountdown
          countdown="10:30"
          hasDeparted={false}
          departureTime="09:38"
        />
      </div>
    </WRAPPER>
  );
};

const StationsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(108, 155, 210, 0.15);
  border-radius: 32px;
  padding: 0 10px;
  margin: 25px 0 30px;
`;
