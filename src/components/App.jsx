import { Routes, Route } from 'react-router-dom';

import TrendingPage from '../pages/TrendingPage';
import RegisterPage from '../pages/auth/RegisterPage';
import LoginPage from '../pages/auth/LoginPage';
import DiscoveryPage from '../pages/DiscoveryPage';
import ListeningHistoryPage from '../pages/ListeningHistoryPage';
import ProfilePage from '../pages/songs/ProfilePage';
import SongPage from '../pages/songs/SongPage';
import RootLayout from '../layouts/RootLayout';
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
      <Route path="/discovery" element={<DiscoveryPage />}></Route>

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

      <Route path="/songs/:songId" element={<SongPage />}></Route>

      <Route path="/register" element={<RegisterPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>

      <Route path="/song" element={<SongPage />}></Route>
    </Routes>
  );
}

export default App;
