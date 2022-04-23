import { MainCountdown } from '@/components/common/MainCountdown';
import { WRAPPER } from '@/context/style/common';
import { SelectedStation } from '@/components/common/SelectedStation';
import { SubCountdown } from '@/components/common/SubCountdown';

export const Home = () => {
  return (
    <WRAPPER>
      {/* TODO: 駅名 */}
      <div>
        {/* otherStation */}
        <SelectedStation />
        {/* otherStation */}
      </div>
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
