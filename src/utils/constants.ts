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

export const TABS = {
  LOOKTABS: [
    { label: '키즈룩', path: PATH_URL.LOOK.KIDS },
    { label: '패밀리룩', path: PATH_URL.LOOK.FAMILY }
  ],
  STUDIOTABS: [
    { label: '스튜디오', path: PATH_URL.STUDIO.RENT },
    { label: '키즈모델', path: PATH_URL.STUDIO.MODEL }
  ]
};
