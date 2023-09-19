export const PATH_URL = {
  LOOK: {
    MAIN: '/look',
    KIDS: '/look/kids',
    FAMILY: '/look/family'
  },
  TREND: '/trend',
  NEARBY: '/nearby',
  STUDIO: {
    MAIN: '/studio',
    RENT: '/studio/rent',
    MODEL: '/studio/model'
  },
  DONATE: '/donate'
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
