import { Routes, Route } from 'react-router-dom';

import TrendingPage from '../pages/TrendingPage';
import RegisterPage from '../pages/auth/RegisterPage';
import LoginPage from '../pages/auth/LoginPage';
import DiscoveryPage from '../pages/DiscoveryPage';
import ListeningHistoryPage from '../pages/ListeningHistoryPage';
import ProfilePage from '../pages/songs/ProfilePage';
import SongPage from '../pages/songs/SongPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TrendingPage />} />

      <Route path="/discovery" element={<DiscoveryPage />}></Route>

      <Route
        path="/listening-history"
        element={<ListeningHistoryPage />}
      ></Route>

      <Route path="/users/:userId" element={<ProfilePage />}></Route>

      <Route path="/songs/:songId" element={<SongPage />}></Route>

      <Route path="/register" element={<RegisterPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
    </Routes>
  );
}

export default App;
