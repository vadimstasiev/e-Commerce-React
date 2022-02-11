import './App.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import {ThemeProvider} from './Components/ThemeContext';
import Background from './Components/Background';
import Toggle from './Components/ThemeToggle';

import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <ThemeProvider>
      <Background>
        <div className="absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6">
          <Toggle />
        </div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            {/* <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/recovery-password" element={<RecoveryPassword/>}/> */}
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </Router>
      </Background>
    </ThemeProvider>
  )
}

export default App;
