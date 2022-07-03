import { Modal } from '@mui/material';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { isShownSnackBarState } from '@/context/globalStates/isShownSnackBarState';
import { selectedStationState } from '@/context/globalStates/selectedStationState';
import { WHITE, BLUE } from '@/context/style/colorTheme';
import type { SelectedStationType } from '@/types/SelectedStationType';
import type { StationType } from '@/types/StationType';

type StationDirectionModalProps = {
  isModalOpen: boolean;
  handleModalClose: () => void;
  stationToStore: StationType;
};

export const StationDirectionModal: React.FC<StationDirectionModalProps> = (props) => {
  const router = useRouter();
  const setIsShownSnackBar = useSetRecoilState(isShownSnackBarState);
  const setSelectedStation = useSetRecoilState(selectedStationState);

  const onClickStationDir = (data: string | undefined) => {
    if (data === undefined) return;

    const stationToStore: StationType = props.stationToStore;
    const StoreStation: SelectedStationType = {
      id: stationToStore.id,
      line_cd: stationToStore.line_cd,
      line_name: stationToStore.stationLineName,
      station_cd: stationToStore.station_cd,
      station_name: stationToStore.stationName,
      selected_direction: data,
    };

    localStorage.setItem('station', JSON.stringify(StoreStation));

    const getStation: SelectedStationType = JSON.parse(localStorage.getItem('station') || '{}');

    if (getStation.station_name === '') {
      alert('エラーが発生しました。');
    } else {
      router.push('/');
      setSelectedStation(getStation);
      setIsShownSnackBar(true);
    }
  };

  return (
    <Modal open={props.isModalOpen} onClose={props.handleModalClose}>
      <ModalBox>
        <ModalTitle>方面を選択してください</ModalTitle>
        {props.stationToStore.stationDirection.map((data, index) => {
          const isLastElm = index + 1 === props.stationToStore.stationDirection.length;

          return (
            <StationDirectionWrapper key={index} isLastElm={isLastElm}>
              <StationDirection>{data}</StationDirection>
              <StationRegisterContainer
                onClick={() => {
                  onClickStationDir(data);
                }}
              >
                登録
              </StationRegisterContainer>
            </StationDirectionWrapper>
          );
        })}
      </ModalBox>
    </Modal>
  );
};

const buttonSize = '70px';

const ModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 24;
  background-color: ${WHITE};
  border-radius: 16px;
  padding: 24px;
  width: 80%;
`;

const ModalTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 16px;
`;

const StationDirectionWrapper = styled.div<{ isLastElm: boolean }>`
  padding: 10px 0;
  border-bottom: ${(props) => (props.isLastElm ? null : '1px solid #eff3f4')};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StationDirection = styled.p`
  max-width: calc(100% - ${buttonSize});
  font-weight: 700;
  font-size: 16px;
`;

const StationRegisterContainer = styled.button`
  width: ${buttonSize};
  color: white;
  font-size: 14px;
  text-align: center;
  background-color: ${BLUE};
  border-radius: 9999px;
  padding: 10px 0;
`;
