import SelectedStation from '@/components/common/SelectedStation';
import { Countdown } from '@/components/common/Countdown';
import { WRAPPER } from '@/context/style/common';

export const Home = () => {
  return (
    <WRAPPER>
      <h1>Home!!</h1>
      {/* TODO: 駅名 */}
      <div>
        {/* otherStation */}
        <SelectedStation />
        {/* otherStation */}
      </div>
      <div>
        <Countdown />
      </div>
    </WRAPPER>
  );
};
