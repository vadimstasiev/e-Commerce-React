import './App.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import {ThemeProvider} from './Components/ThemeContext';
import Background from './Components/Background';
import Toggle from './Components/ThemeToggle';

import Home from './pages/Home';
import NotFound from './pages/NotFound';


// Redux

import { Provider } from 'react-redux'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore' // <- needed if using firestore
import { createStore, combineReducers, compose } from 'redux'
import {
  ReactReduxFirebaseProvider,
  firebaseReducer
} from 'react-redux-firebase'
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore' // <- needed if using firestore

const fbConfig = {
  apiKey: "AIzaSyAvn1YB-cFk1MYc7HNvFv82lRKsNnA-m7U",
  authDomain: "mobile-app-b6ebc.firebaseapp.com",
  databaseURL: "https://mobile-app-b6ebc.firebaseio.com",
  projectId: "mobile-app-b6ebc",
  storageBucket: "mobile-app-b6ebc.appspot.com",
  messagingSenderId: "432394255342",
  appId: "1:432394255342:web:db191516f1180537536cff",
  measurementId: "G-XVJRMFQZ0D"
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  // enableClaims: true // Get custom claims along with the profile
}

// Initialize firebase instance
firebase.initializeApp(fbConfig)

// Initialize other services on firebase instance
firebase.firestore() // <- needed if using firestore

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer // <- needed if using firestore
})

// Create store with reducers and initial state
const initialState = {}
const store = createStore(rootReducer, initialState)

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}

const App = () => {
  return (
    <ThemeProvider>
      <Background>
        <div className="absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6">
          <Toggle />
        </div>
        <Provider store={store}>
          <ReactReduxFirebaseProvider {...rrfProps}>
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
