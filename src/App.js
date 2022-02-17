import AppRouter from './Router';
import {ThemeProvider} from './Components/ThemeContext';
import Background from './Components/Background';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './firebase';
import Loading from './pages/Auth/Loading';

const App = () => {
  const [user, loadingUser, error] = useAuthState(auth);

  return (
    <ThemeProvider>
      {/* <Background> */}
        {loadingUser?
          <Loading/>
        :
          <AppRouter/>
        }
      {/* </Background> */}
    </ThemeProvider>
  )
}

export default App;
