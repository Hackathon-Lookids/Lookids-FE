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
  DONATE: '/donate'
};

export const TABS = {
  LOOKTABS: [
    { id: 'KIDS', label: '키즈룩', path: PATH_URL.LOOK.KIDS },
    { id: 'FAMILY', label: '패밀리룩', path: PATH_URL.LOOK.FAMILY }
  ],
  STUDIOTABS: [
    { id: 'RENT', label: '스튜디오', path: PATH_URL.STUDIO.RENT },
    { id: 'MODEL', label: '키즈모델', path: PATH_URL.STUDIO.MODEL }
  ]
};
