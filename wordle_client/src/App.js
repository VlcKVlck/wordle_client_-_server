import './App.css';
import { AppRoutes } from './routes/Routes';
import { SigninContext } from './providers/signin-context';
import { useState } from 'react';

function App() {

  const [currentUser, setCurrentUser] = useState(localStorage.getItem('username'));

  return (
    <SigninContext.Provider value={{ currentUser, setCurrentUser }}>
      <AppRoutes />
    </SigninContext.Provider>
  );
}

export default App;
