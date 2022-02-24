import { useEffect } from 'react';
import AppRouter from './Router';
import {ThemeProvider} from './Components/ThemeContext';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './firebase';
import Loading from './pages/Auth/Loading';
import GoogleMapsAPI from './googleMapsAPI';

const App = () => {
  const [user, loadingUser, error] = useAuthState(auth);

  return (
    <ThemeProvider>
        <GoogleMapsAPI/>
        {loadingUser?
          <Loading/>
        :
          <AppRouter/>
        }
    </ThemeProvider>
  )
}

export default App;
