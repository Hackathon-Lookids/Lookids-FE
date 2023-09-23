import { PATH_URL } from './constants';

export const getHeaderTitle = (path: string) => {
  switch (path) {
    case '/':
      return 'LOOKIDS';
    case PATH_URL.LOGIN:
      return 'LOGIN';
    case PATH_URL.LOOK.KIDS:
    case PATH_URL.LOOK.FAMILY:
      return 'LOOK';
    case PATH_URL.TREND:
      return 'TREND';
    case PATH_URL.NEARBY:
      return 'NEARBY';
    case PATH_URL.STUDIO.RENT:
    case PATH_URL.STUDIO.MODEL:
      return 'STUDIO';
    case PATH_URL.DONATE:
      return 'DONATE';
  }
};
