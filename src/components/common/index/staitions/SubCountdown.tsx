import { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';
import styled, { css } from 'styled-components';
import { BLACK, BLUE, GRAY, WHITE } from '@/context/style/colorTheme';

type SubCountdownProps = {
  countdown: string;
  departureTime?: string;
  hasDeparted: boolean;
  index: number;
  arrayNum: number;
};

export const SubCountdown: React.FC<SubCountdownProps> = (props) => {
  const [isCenterd, setIsCenterd] = useState<boolean>(false);

  useEffect(() => {
    if (props.arrayNum === props.index) {
      setIsCenterd(true);
    } else {
      setIsCenterd(false);
    }
  }, [props.arrayNum]);

  const Wrapper = styled.div<{
    hasDeparted: boolean;
    state: string;
    isCenterd: boolean;
    index: number;
  }>`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    background-color: ${WHITE};
    border: ${(props) =>
      props.hasDeparted ? `5px solid ${GRAY}` : `5px solid ${BLUE}`};
    border-radius: 24px;
    padding: 5px 10px;
    margin: 20px auto;
    box-shadow: 0px 4px 12px 2px rgba(23, 25, 30, 0.25);

    ${(props) =>
      props.index === 1 && props.state === 'entering'
        ? css`
            top: 0
            animation: moveUpAnime 5s ease 0.00001s normal;
          `
        : ''}

    @keyframes moveUpAnime {
      0% {
        top: 20;
      }
    }

    ${(props) =>
      !props.isCenterd
        ? css`
            width: 18vw;
            height: 18vw;
            max-width: 120px;
            max-height: 120px;
          `
        : ''}

    ${(props) =>
      props.state === 'entering' && isCenterd
        ? css`
            width: 18vw;
            height: 18vw;
            max-width: 120px;
            max-height: 120px;
            animation: increaseSizeAnime 5s ease 0.00001s normal;
          `
        : ''}

    ${(props) =>
      props.state === 'entered' && isCenterd
        ? css`
            width: 50vw;
            height: 50vw;
            max-width: 300px;
            max-height: 300px;
          `
        : ''}

    ${(props) =>
      props.state === 'exiting' && isCenterd
        ? css`
            width: 50vw;
            height: 50vw;
            max-width: 300px;
            max-height: 300px;
            animation: reduceSizeAnime 5s ease 0.00001s normal;
          `
        : ''}

    ${(props) =>
      props.state === 'exited' && isCenterd
        ? css`
            width: 50vw;
            height: 50vw;
            max-width: 300px;
            max-height: 300px;
          `
        : ''}

    @keyframes reduceSizeAnime {
      0% {
        width: 50vw;
        height: 50vw;
        max-width: 300px;
        max-height: 300px;
      }

      100% {
        width: 18vw;
        height: 18vw;
        max-width: 120px;
        max-height: 120px;
      }
    }

    @keyframes increaseSizeAnime {
      0% {
        width: 18vw;
        height: 18vw;
        max-width: 120px;
        max-height: 120px;
      }

      100% {
        width: 50vw;
        height: 50vw;
        max-width: 300px;
        max-height: 300px;
      }
    }
  `;

  const SubCountdownItem: React.FC = () => {
    return (
      <>
        <Countdown hasDeparted={props.hasDeparted}>{props.countdown}</Countdown>
        {props.hasDeparted ? (
          <Description>秒前に出発</Description>
        ) : (
          <DepartureTime>
            {props.departureTime} <span>発</span>
          </DepartureTime>
        )}
      </>
    );
  };

  return (
    <>
      <Transition in={isCenterd} timeout={5000}>
        {(state) => {
          console.log('state:', state);
          console.log('isCenterd:', isCenterd);
          console.log('departureTime:', props.departureTime);

          return (
            <Wrapper
              hasDeparted={props.hasDeparted}
              index={props.index}
              isCenterd={isCenterd}
              state={state}
            >
              <SubCountdownItem />
            </Wrapper>
          );
        }}
      </Transition>
    </>
  );
};

const EnteringWrapper = styled.div<{ hasDeparted: boolean }>`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 18vw;
  height: 18vw;
  max-width: 120px;
  max-height: 120px;
  background-color: ${WHITE};
  border: ${(props) =>
    props.hasDeparted ? `5px solid ${GRAY}` : `5px solid ${BLUE}`};
  border-radius: 24px;
  padding: 5px 10px;
  margin: 20px auto;
  box-shadow: 0px 4px 12px 2px rgba(23, 25, 30, 0.25);
`;

const Description = styled.p`
  color: ${GRAY};
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  margin: 0;
`;

const Countdown = styled.h1<{ hasDeparted: boolean }>`
  color: ${(props) => (props.hasDeparted ? GRAY : BLACK)};
  font-size: 24px;
  line-height: 100%;
  margin: 0;
`;

const DepartureTime = styled.div`
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  span {
    font-size: 12px;
  }
`;
