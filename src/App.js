import './App.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        {/* <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/recovery-password" element={<RecoveryPassword/>}/> */}
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App;
