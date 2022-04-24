import { useState } from 'react';
import { SwipeableHandlers, useSwipeable } from 'react-swipeable';

type Props = {
  selectedStation: string;
  selectedStationLine: string;
};

export const StationTabs: React.FC = () => {
  const [swipeDir, setSwipeDir] = useState<string>('');

  const handlers: SwipeableHandlers = useSwipeable({
    onSwiped: (eventData) => setSwipeDir(eventData.dir),
  });

  return (
    <div {...handlers} style={{ backgroundColor: 'red', height: '100vh' }}>
      Swipe
      {swipeDir === 'Up' && <div>up!!</div>}
      {swipeDir === 'Down' && <div>down!!</div>}
    </div>
  );
};
