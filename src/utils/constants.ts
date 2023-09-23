export const {
  REACT_APP_SERVER,
  REACT_APP_NAVER_MAP_CLIENT_ID,
  REACT_APP_KAKAKO_REST_API_KEY,
  REACT_APP_KAKAO_REDIRECT_URI
} = process.env;

export const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REACT_APP_KAKAKO_REST_API_KEY}&redirect_uri=${REACT_APP_KAKAO_REDIRECT_URI}`;

export const PATH_URL = {
  LOOK: {
    KIDS: '/look/kids',
    FAMILY: '/look/family'
  },
  TREND: '/trend',
  NEARBY: '/nearby',
  STUDIO: {
    RENT: '/studio/rent',
    MODEL: '/studio/model'
  },
  DONATE: '/donate',
  LOGIN: '/login',
  KAKAO: '/api/users/kakao/callback'
};

type TabItem = {
  id: string;
  label: string;
  path: string;
};

type TabsType = {
  LOOKTABS: TabItem[];
  NEARBYTABS: TabItem[];
  STUDIOTABS: TabItem[];
};

export const TABS: TabsType = {
  LOOKTABS: [
    { id: 'KIDS', label: '키즈룩', path: PATH_URL.LOOK.KIDS },
    { id: 'FAMILY', label: '패밀리룩', path: PATH_URL.LOOK.FAMILY }
  ],
  NEARBYTABS: [
    { id: 'GIVEAWAY', label: '무료 나눔', path: PATH_URL.NEARBY },
    { id: 'TRADE', label: '중고 거래', path: PATH_URL.NEARBY }
  ],
  STUDIOTABS: [
    { id: 'RENT', label: '스튜디오', path: PATH_URL.STUDIO.RENT },
    { id: 'MODEL', label: '키즈모델', path: PATH_URL.STUDIO.MODEL }
  ]
};
