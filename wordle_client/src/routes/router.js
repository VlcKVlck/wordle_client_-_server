import App from '../App';
import { createBrowserRouter } from 'react-router-dom';
import { Game } from '../pages/Game';
import { Help } from '../components/Help';
import { Admin } from '../pages/Admin';

export const router = createBrowserRouter([
  {
    path: '*',
    element: <App />,
    children: [
      {
        path: 'game',
        element: <Game />,
      },
      {
        path: 'help',
        element: <Help />,
      },
      {
        path: 'admin',
        element: <Admin />,
      },
    ],
  },
]);
