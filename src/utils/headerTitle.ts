import { PATH_URL } from './constants';

export const headerTitle = (path: string) => {
  switch (path) {
    case '/':
    case PATH_URL.LOOK.MAIN:
    case PATH_URL.LOOK.KIDS:
    case PATH_URL.LOOK.FAMILY:
      return 'LOOK';
    case PATH_URL.TREND:
      return 'TREND';
    case PATH_URL.NEARBY:
      return 'NEARBY';
    case PATH_URL.STUDIO.MAIN:
    case PATH_URL.STUDIO.RENT:
    case PATH_URL.STUDIO.MODEL:
      return 'STUDIO';
    case PATH_URL.DONATE:
      return 'DONATE';
    default:
      console.log(`${path}는 지정되지 않은 경로 입니다.`);
  }
};
