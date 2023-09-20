import { ITabType } from '../components/common/TabBar';
import { PATH_URL, TABS } from './constants';

export const getTabs = (path: string): ITabType[] => {
  switch (path) {
    case '/':
    case PATH_URL.LOOK.KIDS:
    case PATH_URL.LOOK.FAMILY:
      return TABS.LOOKTABS;
    case PATH_URL.STUDIO.RENT:
    case PATH_URL.STUDIO.MODEL:
      return TABS.STUDIOTABS;
    default:
      return [];
  }
};
