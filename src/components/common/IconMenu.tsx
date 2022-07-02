import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { NextRouter, useRouter } from 'next/router';
import React, { FC, memo } from 'react';
import styled from 'styled-components';
import { WHITE } from '@/context/style/colorTheme';

type IconMenuType = {
  isHomePage: boolean;
};

export const IconMenu: FC<IconMenuType> = memo(function IconMenu(props) {
  const router: NextRouter = useRouter();

  return (
    <IconMenuBox
      onClick={() => {
        props.isHomePage ? router.push('/settings') : router.push('/');
      }}
    >
      {props.isHomePage ? (
        <SettingsOutlinedIcon style={{ color: '#0F141A', fontSize: '2.5rem' }} />
      ) : (
        <HomeOutlinedIcon style={{ color: "'#0F141A'", fontSize: '2.5rem' }} />
      )}
    </IconMenuBox>
  );
});

const IconMenuBox = styled.button`
  width: 55px;
  height: 55px;
  bottom: 10%;
  right: 20px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  background-color: ${WHITE};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 100;
`;
