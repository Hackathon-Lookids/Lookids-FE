import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PATH_URL } from '../utils/constants';
import {
  LayoutPage,
  LookFamilyPage,
  LookKidsPage,
  LookPage,
  NearByPage,
  StudioModelPage,
  StudioPage,
  StudioRentPage,
  TrendPage
} from '../pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutPage />}>
          <Route path='/' element={<LookPage />} />
          <Route path={PATH_URL.LOOK.MAIN} element={<LookPage />}>
            <Route path={PATH_URL.LOOK.KIDS} element={<LookKidsPage />} />
            <Route path={PATH_URL.LOOK.FAMILY} element={<LookFamilyPage />} />
          </Route>
          <Route path={PATH_URL.TREND} element={<TrendPage />} />
          <Route path={PATH_URL.NEARBY} element={<NearByPage />} />
          <Route path={PATH_URL.STUDIO.MAIN} element={<StudioPage />}>
            <Route path={PATH_URL.STUDIO.MODEL} element={<StudioModelPage />} />
            <Route path={PATH_URL.STUDIO.RENT} element={<StudioRentPage />} />
          </Route>
          <Route path={PATH_URL.DONATE} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
