import { MainCountdown } from '@/components/common/MainCountdown';
import { WRAPPER } from '@/context/style/common';
import { SelectedStation } from '@/components/common/SelectedStation';

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
        <MainCountdown departureTime="09:38" />
      </div>
    </WRAPPER>
  );
};
