import LockIcon from '@mui/icons-material/Lock';
import styled from 'styled-components';
import { BLACK, BLUE } from '@/context/style/colorTheme';

export const OtherStation: React.FC = () => {
  return (
    <StationWrapper>
      <CommentWrapper>
        <LockIcon sx={{ color: '#fff' }} />
      </CommentWrapper>
      <StationName>駅名</StationName>
      <StationLineName>ライン名</StationLineName>
    </StationWrapper>
  );
};

const StationWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-flow: column;
  height: 70%;
  margin: 0 auto;
  padding: 0 20px;
`;

const CommentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90%;
  width: 100%;
  background-color: rgba(23, 25, 30, 0.6);
  border-radius: 8px;
`;

const StationName = styled.p`
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  color: ${BLACK};
  margin-bottom: 5px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StationLineName = styled.p`
  width: 100%;
  color: ${BLUE};
  font-size: 12px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
