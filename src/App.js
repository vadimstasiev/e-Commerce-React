import './App.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import {ThemeProvider} from './Components/ThemeContext';
import Background from './Components/Background';
import Toggle from './Components/ThemeToggle';

import Home from './pages/Home';
import NotFound from './pages/NotFound';


// Redux

import { Provider } from 'react-redux'
import {initializeApp} from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore' // make sure you add this for firestore
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'

import configureStore from './store'
import { firebase as fbConfig, rrfConfig } from './config'

const initialState = window && window.__INITIAL_STATE__ // set initial state here
const store = configureStore(initialState)
// Initialize Firebase instance
const firebaseApp = initializeApp(fbConfig)

const App = () => {
  return (
    <ThemeProvider>
      <Background>
        <div className="absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6">
          <Toggle />
        </div>
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
                {/* <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/recovery-password" element={<RecoveryPassword/>}/> */}
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
