import { atom } from 'recoil';
import type { SelectedStationType } from '@/types/SelectedStationType';

export const selectedStationState = atom<SelectedStationType | null>({
  key: 'selectedStationState',
  default: null,
});
