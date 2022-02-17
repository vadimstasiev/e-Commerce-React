import AppRouter from './Router';
import {ThemeProvider} from './Components/ThemeContext';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './firebase';
import Loading from './pages/Auth/Loading';

const App = () => {
  const [user, loadingUser, error] = useAuthState(auth);

  return (
    <ThemeProvider>
        {loadingUser?
          <Loading/>
        :
          <AppRouter/>
        }
    </ThemeProvider>
  )
}

export default App;
