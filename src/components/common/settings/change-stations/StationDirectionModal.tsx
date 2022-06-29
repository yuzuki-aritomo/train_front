import { Modal } from '@mui/material';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { selectedStationState } from '@/context/globalStates/selectedStationState';
import { GRAY, WHITE } from '@/context/style/colorTheme';
import type { SelectedStationType } from '@/types/SelectedStationType';
import type { StationType } from '@/types/StationType';

type StationDirectionModalProps = {
  isModalOpen: boolean;
  handleModalClose: () => void;
  stationToStore: StationType;
};

export const StationDirectionModal: React.FC<StationDirectionModalProps> = (props) => {
  const router = useRouter();
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
      console.log('success');
      alert(
        getStation.line_name +
          ' / ' +
          getStation.station_name +
          ' / ' +
          getStation.selected_direction +
          ' で登録されました。'
      );
      router.push('/');
      setSelectedStation(getStation);
    }
  };

  return (
    <Modal open={props.isModalOpen} onClose={props.handleModalClose}>
      <ModalBox>
        <ModalSelectWrapper>方面を選択してください</ModalSelectWrapper>
        {props.stationToStore.stationDirection.map((data, index) => {
          return (
            <StationDirectionWrapper key={index}>
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
        ;
      </ModalBox>
    </Modal>
  );
};

const ModalBox = styled.div`
  width: 82%;
  height: 26%;
  top: 30%;
  left: 0;
  right: 0;
  margin: auto;
  background-color: ${WHITE};
  border-radius: 16px;
  position: absolute;
`;

const ModalSelectWrapper = styled.div`
  width: 50vw;
  margin: 30px auto 0 auto;
  font-weight: 700;
  font-size: 16px;
`;

const StationDirectionWrapper = styled.div`
  height: 8vh;
  margin: 0 20px;
  border-bottom: 1px solid ${GRAY};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StationDirection = styled.p`
  font-weight: 700;
  font-size: 16px;
`;

const StationRegisterContainer = styled.button`
  width: 18vw;
  color: white;
  font-size: 14px;
  text-align: center;
  background-color: purple;
  border-radius: 32px;
  padding: 10px 0;
`;
