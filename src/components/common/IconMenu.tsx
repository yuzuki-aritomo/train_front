import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ReplayIcon from '@mui/icons-material/Replay';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { NextRouter, useRouter } from 'next/router';
import React, { FC, memo } from 'react';
import styled from 'styled-components';
import { WHITE } from '@/context/style/colorTheme';

type IconMenuType = {
  isHomePage: boolean;
  reloadFn?: () => void;
};

export const IconMenu: FC<IconMenuType> = memo(function IconMenu(props) {
  const router: NextRouter = useRouter();
  const iconStyle = { color: '#0F141A', fontSize: '2.5rem' };

  return (
    <Menus>
      <IconMenuBox
        onClick={() => {
          props.isHomePage ? router.push('/settings') : router.push('/');
        }}
      >
        {props.isHomePage ? (
          <SettingsOutlinedIcon style={iconStyle} />
        ) : (
          <HomeOutlinedIcon style={iconStyle} />
        )}
      </IconMenuBox>
      <IconMenuBox>
        <ReplayIcon style={iconStyle} onClick={props.reloadFn} />
      </IconMenuBox>
    </Menus>
  );
});

const Menus = styled.div`
  position: absolute;
  bottom: 7%;
  right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  row-gap: 15px;
  z-index: 100;
`;

const IconMenuBox = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 55px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  background-color: ${WHITE};
  border-radius: 8px;
`;
