import React, { useEffect, useState } from 'react';
import { SwipeableHandlers, useSwipeable } from 'react-swipeable';
import { SubCountdown } from '@/components/common/index/staitions/SubCountdown';
import { GRAY } from '@/context/style/colorTheme';
import { WRAPPER } from '@/context/style/common';

type CountInfo = {
  departureTime: string;
  hasDeparted: boolean;
};

export const Home = () => {
  const [swipeDir, setSwipeDir] = useState<string>('');
  const [arrayNum, setArrayNum] = useState<number>(1);
  const countInfoList: CountInfo[] = [
    { departureTime: '09:10', hasDeparted: true },
    { departureTime: '10:10', hasDeparted: false },
    { departureTime: '11:10', hasDeparted: false },
    { departureTime: '12:10', hasDeparted: false },
    { departureTime: '13:10', hasDeparted: false },
    { departureTime: '14:10', hasDeparted: false },
    { departureTime: '15:10', hasDeparted: false },
    { departureTime: '16:10', hasDeparted: false },
    { departureTime: '17:10', hasDeparted: false },
    { departureTime: '18:10', hasDeparted: false },
  ];

  const handlers: SwipeableHandlers = useSwipeable({
    onSwiped: (eventData) => {
      setSwipeDir(eventData.dir);
    },
  });

  useEffect(() => {
    if (swipeDir === 'Up') {
      const updatedArrayNum: number = arrayNum + 1;
      setArrayNum(updatedArrayNum);
    } else if (swipeDir === 'Down') {
      const updatedArrayNum: number = arrayNum - 1;
      setArrayNum(updatedArrayNum);
    }
    setSwipeDir('');
  }, [swipeDir]);

  return (
    <WRAPPER>
      <div
        {...handlers}
        style={{
          backgroundColor: GRAY,
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          WebkitTransform: 'translate(-50%, -50%)',
          msTransform: 'translate(-50%, -50%)',
          padding: '10px 50px',
          width: '100%',
        }}
      >
        {countInfoList.map((info, index) => {
          const isValidSubCountdown = (): boolean => {
            return (
              arrayNum - 2 === index ||
              arrayNum - 1 === index ||
              arrayNum === index ||
              arrayNum + 1 === index ||
              arrayNum + 2 === index
            );
          };

          return (
            <>
              {isValidSubCountdown() && (
                <SubCountdown
                  key={index}
                  countdown="01:00"
                  departureTime={info.departureTime}
                  hasDeparted={info.hasDeparted}
                />
              )}
            </>
          );
        })}
      </div>
    </WRAPPER>
  );
};

// const StationsWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background-color: rgba(108, 155, 210, 0.15);
//   border-radius: 32px;
//   padding: 0 10px;
//   margin: 25px 0 30px;
// `;
