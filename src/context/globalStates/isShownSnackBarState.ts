import { atom } from 'recoil';

export const isShownSnackBarState = atom<boolean>({
  key: 'isShownSnackBarState',
  default: false,
});
