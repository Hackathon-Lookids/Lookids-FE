import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PATH_URL } from '../utils/constants';
import {
  LayoutPage,
  LoginPage,
  LookFamilyPage,
  LookKidsPage,
  NearByPage,
  StudioModelPage,
  StudioRentPage,
  TrendPage,
  DonatePage,
  KakaoRedirect
} from '../pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutPage />}>
          <Route path='/' element={<LoginPage />} />
          <Route path={PATH_URL.LOGIN} element={<LoginPage />} />
          <Route path={PATH_URL.LOOK.KIDS} element={<LookKidsPage />} />
          <Route path={PATH_URL.LOOK.FAMILY} element={<LookFamilyPage />} />
          <Route path={PATH_URL.TREND} element={<TrendPage />} />
          <Route path={PATH_URL.NEARBY} element={<NearByPage />} />
          <Route path={PATH_URL.STUDIO.MODEL} element={<StudioModelPage />} />
          <Route path={PATH_URL.STUDIO.RENT} element={<StudioRentPage />} />
          <Route path={PATH_URL.DONATE} element={<DonatePage />} />
          <Route path={PATH_URL.DONATE} element={<DonatePage />} />
          <Route path={PATH_URL.KAKAO} element={<KakaoRedirect />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
