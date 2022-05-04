import { Modal } from '@mui/material';
import styled from 'styled-components';
import { GRAY, WHITE } from '@/context/style/colorTheme';

type StationDirectionModalProps = {
  isModalOpen: boolean;
  handleModalClose: () => void;
  selectedStationDir: (string | undefined)[];
};

export const StationDirectionModal: React.FC<StationDirectionModalProps> = (props) => {
  const onClickStationDir = (data: string | undefined) => {
    console.log('選択された。');
    console.log(data);
  };
  return (
    <Modal open={props.isModalOpen} onClose={props.handleModalClose}>
      <ModalBox>
        <ModalSelectWrapper>方面を選択してください</ModalSelectWrapper>
        {props.selectedStationDir.map((data, index) => {
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
  fontweight: 700;
  fontsize: 16px;
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
