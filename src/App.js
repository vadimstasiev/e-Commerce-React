import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import {ThemeProvider} from './Components/ThemeContext';
import Background from './Components/Background';

import Home from './pages/Home';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import ResetPassword from './pages/Auth/ResetPassword';
import NotFound from './pages/NotFound';


// Redux

import { Provider } from 'react-redux'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore' 
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'

import configureStore from './store'
import { firebase as fbConfig, rrfConfig } from './config'

const initialState = window && window.__INITIAL_STATE__ // set initial state here
const store = configureStore(initialState)
// Initialize Firebase instance
const firebaseApp = firebase.initializeApp(fbConfig)

const App = () => {
  return (
    <ThemeProvider>
      <Background>
        <Provider store={store}>
          <ReactReduxFirebaseProvider 
            firebase={firebaseApp}
            config={rrfConfig}
            dispatch={store.dispatch}
            createFirestoreInstance={createFirestoreInstance}
          >
            <Router>
              <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/SignIn" element={<SignIn/>}/>
                <Route exact path="/SignUp" element={<SignUp/>}/>
                <Route exact path="/ResetPassword" element={<ResetPassword/>}/>
                {/* <Route exact path="/recovery-password" element={<RecoveryPassword/>}/> */}
                <Route path="*" element={<NotFound/>}/>
              </Routes>
            </Router>
          </ReactReduxFirebaseProvider>
        </Provider>
      </Background>
    </ThemeProvider>
  )
}

export default App;
