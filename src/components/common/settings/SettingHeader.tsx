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
    <SettingHeaderWrapper>
      <ArrowBackIosNewIcon
        sx={{ width: '20px' }}
        onClick={() => {
          router.back();
        }}
      />
      <SettingName>{props.pageName}</SettingName>
    </SettingHeaderWrapper>
  );
};

const SettingHeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 10px;
  height: 53px;
  padding: 0px 16px;
  background-color: ${WHITE};
  margin-bottom: 20px;
`;

const SettingName = styled.p`
  font-weight: 700;
  font-size: 16px;
`;
