import { Routes, Route } from 'react-router-dom';

import TrendingPage from '../pages/TrendingPage';
import RegisterPage from '../pages/auth/RegisterPage';
import LoginPage from '../pages/auth/LoginPage';
import DiscoveryPage from '../pages/DiscoveryPage';
import ListeningHistoryPage from '../pages/ListeningHistoryPage';
import ProfilePage from '../pages/songs/ProfilePage';
import SongPage from '../pages/songs/SongPage';
import RootLayout from '../layouts/RootLayout';
import DiscoverLayout from '../layouts/DiscoverLayout';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../redux/authSelectors';
import { useRef, useEffect } from 'react';
import { loginAction, logoutAction } from '../redux/authActions';
import { verifyService } from '../services/authServices';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!user || isFirstRender.current) {
      return;
    }

    verifyService()
      .then((data) => {
        dispatch(loginAction(data));
      })
      .catch(() => {
        dispatch(logoutAction());
      });

    isFirstRender.current = false;
  }, [dispatch, user]);

  return (
    <Routes>
      <Route element={<DiscoverLayout />}>
        <Route path="/discovery" element={<DiscoveryPage />}></Route>
      </Route>

      <Route element={<RootLayout />}>
        <Route path="/" element={<TrendingPage />} />
      </Route>

      <Route
        path="/listening-history"
        element={<ListeningHistoryPage />}
      ></Route>

      <Route element={<RootLayout />}>
        <Route path="/users/:userId" element={<ProfilePage />} />
      </Route>

      <Route element={<DiscoverLayout />}>
        <Route path="/audios/:audioId" element={<SongPage />}></Route>
      </Route>

      <Route path="/register" element={<RegisterPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
    </Routes>
  );
}

export default App;
