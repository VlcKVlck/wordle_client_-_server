import { NavBar } from '../components/NavBar';
import { Route, Routes } from 'react-router-dom';
import { Welcome } from '../pages/Welcome';
import { Game } from '../pages/Game';
import { Admin } from '../pages/Admin';

export function AppRoutes() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Welcome />} />
        <Route path="game" element={<Game />} />
        <Route path="admin" exact element={<Admin />} />
      </Routes>
    </>
  );
}
