import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { NextRouter, useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { BLACK, WHITE } from '@/context/style/colorTheme';

type IconMenuType = {
  isHomePage: boolean;
};

export const IconMenu: React.FC<IconMenuType> = (props) => {
  const router: NextRouter = useRouter();

  return (
    <IconMenuBox
      onClick={() => {
        props.isHomePage ? router.push('/settings') : router.push('/');
      }}
    >
      {props.isHomePage ? (
        <SettingsOutlinedIcon style={{ color: BLACK, fontSize: '3rem' }} />
      ) : (
        <HomeOutlinedIcon style={{ color: BLACK, fontSize: '3rem' }} />
      )}
    </IconMenuBox>
  );
};

const IconMenuBox = styled.button`
  width: 50px;
  height: 50px;
  top: 85%;
  left: 80%;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  background-color: ${WHITE};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 100;
`;
