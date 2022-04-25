import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { NextRouter, useRouter } from 'next/router';
import styled from 'styled-components';
import { WHITE } from '@/context/style/colorTheme';

type SettingHeaderProps = {
  pageName: string;
};

export const SettingHeader: React.FC<SettingHeaderProps> = (props) => {
  const router: NextRouter = useRouter();

  return (
    <SettingHeadeerWrapper>
      <ArrowBackIosNewIcon
        sx={{ width: '35px', margin: '0 0 0 10px' }}
        onClick={() => {
          router.back();
        }}
      />
      <SettingName>{props.pageName}</SettingName>
    </SettingHeadeerWrapper>
  );
};

const SettingHeadeerWrapper = styled.div`
  width: 100vw;
  height: 48px;
  background-color: ${WHITE};
  margin-bottom: 20px;
  display: flex;
  justify-content: left;
  align-items: center;
`;

const SettingName = styled.p`
  font-weight: 700;
  font-size: 16px;
`;
